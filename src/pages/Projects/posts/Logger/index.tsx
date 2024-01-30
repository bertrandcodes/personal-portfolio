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
      <img className={styles.hero} src="/bughero.jpg" alt="payment processor graphic" />
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
        You can think of the logger as a public interface that can be called whenever we need to
        capture, share, or log information. Unlike a simple{" "}
        <span className={styles.code}>console.log()</span>, the logger offers numerous additional
        functionalities and possibilities. For example, you can send data to the backend to be
        stored and accessed later. You can have insight into the type of data that got logged
        (examples include warning, debug, and info) and filter them as you see fit. Or perhaps you
        wanted logged information displayed outside the console and on the UI itself for developers
        to see.
      </p>
      <p className={styles.text}>
        During the research phase, it seemed like other logger libraries work using Java-like class
        instantiation. However, I decided to lean into the functional programming nature of
        JavaScript to gain advantages from patterns used in other areas of the app such as
        higher-order functions and composable units of functionality. For example, with a common
        function interface, we can use a side-effect composition utility function to sequentially
        call logger functions for each destination with the same data.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/composelog.png" alt="snippet of composeLogFunctions code" />
        <p>A functional programming pattern allows us to compose log functions together like so.</p>
      </div>
      <h3 className={styles.sectionHeader} id="implementation">
        Implementation Overview
      </h3>
      <p className={styles.text}>
        The default publicly accessible API for the app logger is created when calling
        <span className={styles.code}>createLogger()</span> with no arguments.
      </p>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <img src="/createlogger.png" alt="snippet of createLogger code" />
      </div>
      <p className={styles.text}>
        The <span className={styles.code}>createLogger()</span> function returns an object that has
        functions for each log level attached to it. Log levels include:{" "}
        <span className={styles.code}>debug</span>, <span className={styles.code}>error</span>,{" "}
        <span className={styles.code}>warn</span>, <span className={styles.code}>error</span>, and
        <span className={styles.code}>fatal</span>. The createLogger function accepts a log function
        as an argument and supplies a default one if none are provided. Each function for each log
        level calls this log function, which can be configured in various ways to specify where the
        data gets sent. The other optional argument on{" "}
        <span className={styles.code}>createLogger()</span> is the current time using{" "}
        <span className={styles.code}>new Date</span>. I chose to make this dependency injectable
        rather than creating it within so that for testing we may provide an external date to
        measure against.
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
        log level string to the number and the number back to the string. The problem is, if you
        wanted to get the string value of the log level to send to the backend for example, you
        would need to do something like{" "}
        <span className={styles.code}>LogLevel[LogLevel.DEBUG]</span>.
      </p>
      <p className={styles.text}>
        Another issue is that in practice we would want enums keys to be unique values within the
        namespace that only get compared to each other. However, with the above representation of
        LogLevel, equating LogLevel.DEBUG to its value 10 would yield true when it should be false.
        Finally, we get an issue due to the structural typing nature of TypeScript. An empty object
        can be considered a LogLevel which would defeat the purpose of even having log level types.
        With some digging and inspiration from{" "}
        <a href="https://stackoverflow.com/questions/59118271/using-symbol-as-object-key-type-in-typescript/59120564#59120564">
          here
        </a>
        , I arrived at a solution involving JavaScript symbols. Symbols are a frequently overlooked
        data type in JavaScript that guarantees values to be unique. In short, following the idea of
        the code below a LogLevel type must be an object with the specific Symbol instance above
        defined as a property key.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/symbol.png" alt="snippet of symbol code" />
      </div>
      <p className={styles.text}>
        To further establish type safety, I built a <span className={styles.code}>.from</span>{" "}
        function within LogLevel that checks if the log level is a defined value. This way instead
        of using TypeScript to coerce with “as LogLevel” we can check using the{" "}
        <span className={styles.code}>.from</span> function to control possible errors instead.{" "}
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/fromfunction.png" alt="snippet of .from code" />
      </div>
      <p className={styles.text}>
        The results are referentially identical log levels. Furthermore, log level enums can now
        only be compared to each other and not other values like numbers like with TypeScript enums.
        Using custom functions within LogLevel, we are also able to parse the log level num and
        output either string or number representation for use when we see fit.
      </p>
      <h3 className={styles.sectionHeader} id="batching">
        Batching Log Calls
      </h3>
      <p className={styles.text}>
        Finally, to avoid potentially sending a new network request for each log, I implemented a
        configurable function that flushes a queue of batched logs into a network request either
        after a certain number or a certain timeframe. We also attached an event listener to the
        page to run on a visibility change in case we need to send any queued-up logs when a user
        exists the browser.
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
