import React from "react";

import { ScrollIndicator, SeoData } from "@components";
import { FurtherReading, TOC } from "../../components";
import styles from "../styles.module.scss";

const Logger = () => (
  <div className={styles.root}>
    <TOC />
    <div className={styles.container}>
      <SeoData
        title="Custom Logger | Bertrand Shao"
        description="A custom logger for HSID. Featuring enums and symbols."
      />
      <ScrollIndicator />
      <div className={styles.center}>
        <h1>Designing a Custom Logger Tool</h1>
        <h2 className={styles.subheader}>Considerations and Implementation</h2>
      </div>
      <img className={styles.hero} src="/bughero.png" alt="payment processor graphic" />
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptions}>
          <div>
            <span className={styles.descriptor1}>Timeline</span>
            <span className={styles.descriptor2}>1 Month (August 2023 - September 2023)</span>
          </div>
          <div>
            <span className={styles.descriptor1}>Role</span>
            <span className={styles.descriptor2}>Senior Software Engineer</span>
          </div>
          <div>
            <span className={styles.descriptor1}>Core Responsibilities</span>
            <span className={styles.descriptor2}>Frontend</span>
          </div>
        </div>
        <p className={styles.subtext}>
          <i>
            HealthSafe ID (HSID) is an authentication product that provides login and registration
            services to millions of users a month. Due to the significance and scale of this system,
            my team dedicates a good amount of effort to ensure resilience by improving the
            developer experience and enhancing error handling. My custom logger contributes to these
            two areas and I will be discussing implementation details below.
          </i>
        </p>
      </div>
      <h3 className={styles.sectionHeader} id="functionality">
        Functionality
      </h3>
      <p className={styles.text}>
        In the simplest form, a logger logs data from one place to another. You may be familiar with{" "}
        <span className={styles.code}>console.log()</span>, which has the function of logging
        passed-in data from the code to the browser console.
      </p>
      <p className={styles.text}>
        Similarly, our custom logger is also a public interface that can called with certain data to
        perform additional functionalities such as capturing, sharing, or logging information. To
        help visualize, below is an example instance of a logger API that we can export and utilize
        within other files:
      </p>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <img src="/createlogger.png" alt="snippet of createLogger code" />
        <p>
          The default publicly accessible API is created when calling createLogger() with no
          arguments.
        </p>
      </div>
      <p className={styles.text}>
        There are many use cases for this logger. Originally, I implemented it as a way to extend
        error-handling functionalities cleanly. Imagine we have an Axios call that fails. The catch
        block may contain a switch case that deals with multiple known errors and defaults to a case
        with an unexpected error. We may very well want to handle the default case (likely a network
        issue) differently from the others. Perhaps we want to send unexpected errors to a backend
        logging service while warning the user in the case of an expected error. The logger makes
        this flexibility possible and allows for these additional features to be easily adjustable.
      </p>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <img src="/switchcase.jpg" alt="snippet of error handling code with logger" />
        <p>An example of how we may use the logger to handle a failed network request.</p>
      </div>
      <p className={styles.text}>
        Other uses of the logger include being able to easily send data to different services
        outside of network calls, extending the functionality of default browser console loggers,
        and allowing for alerts and notifications to pop up on the developer’s UI.
      </p>
      <h3 className={styles.sectionHeader} id="implementation">
        Implementation Overview
      </h3>
      <p className={styles.text}>
        Let’s take a closer look at the <span className={styles.code}>createLogger()</span> function
        from above.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/createloggercode.png" alt="snippet of createLogger code" />
        <p>
          Code for createLogger(). Info, warn, error, and fatal follow a similar pattern to debug
          and have thus been condensed.
        </p>
      </div>
      <p className={styles.text}>
        In my initial design, I narrowed the requirements of the logger down to two: classifying the
        type of log entry and determining where to send that log entry.
      </p>

      <p className={styles.text}>
        These two main elements are present in the above function as{" "}
        <span className={styles.code}>LogLevel</span> and <span className={styles.code}>LogFn</span>
        . The former consists of <span className={styles.code}>debug</span>,{" "}
        <span className={styles.code}>error</span>, <span className={styles.code}>warn</span>, and
        <span className={styles.code}>fatal</span>. These are similar to HTTP method/verbs (e.g.
        GET, POST, etc.) in the sense that one key piece of information determines the “type” of
        call to make while the rest of the data for the log entry is otherwise the same.
      </p>

      <p className={styles.text}>
        A passed-in <span className={styles.code}>LogFn</span> determines the destinations logging
        entries will go. Most commonly, these are the browser console, STDOUT for scripts and
        servers, and log aggregator services such as{" "}
        <a href="https://www.splunk.com/" target="_blank" rel="noreferrer">
          Splunk
        </a>
        . Here’s a basic example:
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/composelog.png" alt="snippet of composeLogFunctions code" />
        <p>A functional programming pattern allows us to compose log functions together like so.</p>
      </div>
      <p className={styles.text}>
        During the research phase, I found that many logger libraries use Java-like class
        instantiation. However, I decided to lean into the functional programming nature of
        JavaScript to gain advantages from patterns such as higher-order functions and composable
        units of functionality. With a common function interface, we gain access to the above
        side-effect composition utility function that can sequentially call logger functions for
        each destination with the same data.
      </p>
      <p className={styles.text}>
        The <span className={styles.code}>createLogger()</span> function accepts a{" "}
        <span className={styles.code}>LogFn</span> as an argument and supplies a default one if none
        are provided. The other optional argument on{" "}
        <span className={styles.code}>createLogger()</span> is the current time using{" "}
        <span className={styles.code}>new Date()</span>. I chose to make this dependency injectable
        rather than creating it within so that for testing we may provide an external time stamp to
        measure against.
      </p>
      <h3 className={styles.sectionHeader} id="environment">
        Logging Based Off Environment
      </h3>
      <p className={styles.text}>
        The next consideration was controlling which log destination receives log entries per deploy
        environment as well as which <span className={styles.code}>LogLevel</span>s are sent and
        which are swallowed. This can be done by wrapping each{" "}
        <span className={styles.code}>LogFn</span> for each destination in a higher-order function
        that takes a <span className={styles.code}>LogFn</span>
        and returns a <span className={styles.code}>LogFn</span> that only calls the wrapped{" "}
        <span className={styles.code}>LogFn</span> when the specified{" "}
        <span className={styles.code}>LogLevel</span> or above is triggered. For example, given log
        destinations for an aggregator, the browser console, and the app UI, we can define the
        following configurations:
      </p>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <img src="/environments.png" alt="logging based on environments" />
        <p>How logging should be handled based on the environment.</p>
      </div>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <img src="/logatlevel.png" alt="snippet of logAtLevel code" />
        <p>The higher-order function that manages which log destination receives log entries.</p>
      </div>
      <h3 className={styles.sectionHeader} id="batching">
        Batching Log Calls
      </h3>
      <p className={styles.text}>
        To avoid potentially sending a new network request for each log, I implemented a
        configurable function that flushes a queue of batched logs into a network request either
        after a certain number or a certain timeframe. We also attached an event listener to the
        page to run on a visibility change in case we need to send any queued-up log entries when a
        user exists the browser.
      </p>
      <h3 className={styles.sectionHeader} id="enums">
        Designing Better TypeScript Enums
      </h3>
      <div className={styles.mediaWithDescription}>
        <img src="/enums.png" alt="TypeScript enums" />
        <p>How TypeScript enums work beneath the hood.</p>
      </div>
      <p className={styles.text}>
        You can see that the return value of the immediately invoked function essentially maps the
        <span className={styles.code}>LogLevel</span> string to the number and the number back to
        the string. The problem is, if you wanted to get the string value of the{" "}
        <span className={styles.code}>LogLevel</span> to send to the backend for example, you would
        need to do something like <span className={styles.code}>LogLevel[LogLevel.DEBUG]</span>.
      </p>
      <p className={styles.text}>
        Another issue is that in practice we would want enums keys to be unique values within the
        namespace that only get compared to each other. However, with the above representation of
        <span className={styles.code}>LogLevel</span>, equating{" "}
        <span className={styles.code}>LogLevel.DEBUG</span> to its value 10 would yield true when it
        should be false. We also get an issue due to the structural typing nature of TypeScript. An
        empty object can be considered a <span className={styles.code}>LogLevel</span> which would
        defeat the purpose of even having <span className={styles.code}>LogLevel</span> types. With
        some digging and inspiration from{" "}
        <a
          href="https://stackoverflow.com/questions/59118271/using-symbol-as-object-key-type-in-typescript/59120564#59120564"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        , I arrived at a solution involving JavaScript symbols. Symbols are a frequently overlooked
        data type in JavaScript that guarantees values to be unique. In short, following the idea
        from the code below, a <span className={styles.code}>LogLevel</span> type must be an object
        with the specific Symbol instance above defined as a property key.
      </p>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <img src="/symbol.png" alt="snippet of symbol code" />
        <p>How symbols are used to guarantee uniqueness.</p>
      </div>
      <p className={styles.text}>
        To further establish type safety, I built a <span className={styles.code}>from()</span>{" "}
        function within <span className={styles.code}>LogLevel</span> that checks if the{" "}
        <span className={styles.code}>LogLevel</span> is a defined value. This way instead of using
        TypeScript to coerce with “as LogLevel” we can check using the{" "}
        <span className={styles.code}>from()</span> function to control possible errors instead.{" "}
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/fromfunction.png" alt="snippet of .from code" />
        <p>A better alternative to TypeScript coercing.</p>
      </div>
      <p className={styles.text}>
        The results are referentially identical <span className={styles.code}>LogLevel</span>s.
        Furthermore, <span className={styles.code}>LogLevel</span> enums can now only be compared to
        each other and not other values like numbers like with TypeScript enums. Using custom
        functions within <span className={styles.code}>LogLevel</span>, we are also able to parse
        the <span className={styles.code}>LogLevel</span> enum and output either string or number
        representation for use when we see fit.
      </p>
      <h3 className={styles.sectionHeader} id="reflection">
        Reflection
      </h3>
      <p className={styles.text}>
        By starting from bare requirements and planning deeply about the features needed, I was able
        to successfully design a tool that improves application resiliency and the developer
        experience. A bonus was that I got to play around with symbols, something I had learned
        about quite early on but rarely came in contact with. Here’s to consistently working with
        new concepts and always expanding your repertoire!
      </p>
      <FurtherReading
        src1="/duffl.jpg"
        src2="/servers.jpg"
        title1="Augmenting Duffl's Restock Process"
        title2="A First Dive Into System Design"
        time1="8 min"
        time2="10 min"
        description1="How might we harness technology to optimize the efficiency of our supply chain processes?"
        description2="What does it take to generate and insert ten million data points into a database
      efficiently?"
        link1="restocking"
        link2="sdc"
      />
    </div>
  </div>
);

export default Logger;
