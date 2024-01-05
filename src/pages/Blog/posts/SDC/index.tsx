import React from "react";

import { ScrollIndicator, SeoData } from "@components";
import styles from "../styles.module.scss";

const SDC = () => (
  <div className={styles.root}>
    <SeoData
      title="A First Dive Into System Design | Bertrand Shao"
      description="Blog by Bertrand Shao. Learn about a system design capstone (SDC)."
      keywords="system design capstone, SDC, Hack Reactor, bootcamp, ten million records, mongodb, postgresql"
    />
    <ScrollIndicator />
    <div className={styles.center}>
      <h1>A First Dive Into System Design</h1>
      <h2 className={styles.subheader}>How to Operationalize and Scale a Web App</h2>
    </div>
    <img
      className={styles.mainImage}
      src="/servers.jpg"
      alt="graphic depicting computer servers on the cloud"
    />
    <div className={styles.container}>
      <div className={styles.description}>
        <div>
          <span className={styles.descriptor1}>Timeline</span>
          <span className={styles.descriptor2}>3 Month (April 2020 - June 2020)</span>
        </div>
        <div>
          <span className={styles.descriptor1}>Role</span>
          <span className={styles.descriptor2}>Hack Reactor Student</span>
        </div>
      </div>
      <p className={styles.subtext}>
        <i>
          What does it take to generate and insert ten million data points into a database
          efficiently? What strategies can we implement to handle thousands of user requests per
          second on our service?
        </i>
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        These were the burning questions my team and I faced in the final phase of our 13-week
        bootcamp. Up until then, our primary focus has been on the front-end. Question about a bug?
        Drop a “console.log”. State not rendering? Consult the dev tool GUI. Checking underneath the
        hood and optimizing server capabilities? Now that’s a different story. Our focus had shifted
        towards areas with less visibility and we had to adjust our strategies accordingly. But fret
        not! After all, decrypting the magic of the servers and databases is essential to becoming a
        well rounded developer. With that in mind, we dove headfirst into the mysteriously exciting
        world of system design.
      </p>
    </div>
    <h3 className={styles.sectionHeader}>Creating the 10,000,000</h3>
    <div className={styles.container}>
      <p className={styles.text}>
        For background, our team was given a functional legacy codebase to perform queries off of.
        The problem was that this existing database only housed 100 records. Each of us had to
        develop our own techniques to increase that figure to 10,000,000. Scary number isn’t it? As
        it turns out, ten million records is not much to brag about when it comes to large scale
        production sites (think{" "}
        <a href="facebook.com" target="_blank">
          facebook.com
        </a>
        ).
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        To hit this mark, I first needed a function that would generate unique sets of items. Since
        the existing codebase UI copied a Nike product page, this meant generating shoe artifacts
        with fresh new information every time. With help from several helper functions, I created a
        random shoe generator that encapsulated data points such as shoe name, price, size- the kind
        of details that come to mind when you think about a Nike shoe.{" "}
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        With a generator function up and running, I ran into a new challenge. Turns out writing data
        into a JSON file temporarily took up a sizable chunk of RAM space. How was I supposed to run
        this function ten million times without overloading my machine? After some digging, I found
        the answer in “fs.createWriteStream” and its “drain” method.
      </p>
    </div>
    <img className={styles.image} src="/drain.jpg" alt="code for drain and stream" />
    <div className={styles.container}>
      <p className={styles.text}>
        According to{" "}
        <a
          href="https://areknawo.com/node-js-file-streams-explained/"
          target="_blank"
          rel="noreferrer"
        >
          documentation
        </a>
        , everytime we call the write() method we write data to an internal buffer. Once this buffer
        reaches its capacity (or exceeds its highWaterMark property), the drain event fires to
        prevent more data from being written while simultaneously “flushing” the previously occupied
        memory. Doing so prevents high memory bottlenecks and crashes.
      </p>
    </div>
    <img className={styles.image} src="/finished.jpg" alt="finished in 256.51 seconds" />
    <div className={styles.container}>
      <p className={styles.text}>
        And just like that, I had successfully occupied my JSON file with 10 million unique nike
        shoe objects in a little under 5 minutes.*
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.highlight}>
        *Make sure to add this aggressively large JSON file to your gitignore before pushing your
        repo!
      </p>
    </div>
    <h3 className={styles.sectionHeader}>Choosing a Database</h3>
    <div className={styles.container}>
      <p className={styles.text}>
        Next, my job was to copy these 10 million records over into a database of choice. The legacy
        server had used MongoDB, but switching over to a relational (SQL) database such as
        PostgreSQL was also an option. To identify which better suited our needs, I had to weigh
        some pros and cons and benchmark the two.
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        Traditionally speaking, MongoDB and other document databases excel at working with formats
        such as JSON data. However, recently PostgreSQL has also begun offering enhanced JSON
        storage capabilities. Some{" "}
        <a
          href="https://www.sisense.com/blog/postgres-vs-mongodb-for-storing-json-data/"
          target="_blank"
          rel="noreferrer"
        >
          online sources
        </a>{" "}
        will say that PostgreSQL offers transactional integrity and data optimization features at
        the cost of speed and performance. But at the same time, a{" "}
        <a
          href="https://www.enterprisedb.com/blog/comparison-mongodb-vs-postgresql"
          target="_blank"
          rel="noreferrer"
        >
          test in 2014
        </a>{" "}
        showed PostgreSQL beating out MongoDB in categories such as data ingestion, selection, and
        inserts by large margins. On the other hand, MongoDB proved superior in updating individual
        fields whereas PostgreSQL required one to extract the whole document and rewrite it back
        after changes were made.
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        Considering that my service only required searching an individual product given an ID, I
        decided PostgreSQL would be my best bet. Its JSONB representation automatically assigned an
        auto incrementing ID to each item. This in conjunction with PostgreSQL’s{" "}
        <a
          href="https://www.postgresql.org/docs/10/indexes-index-only-scans.html"
          target="_blank"
          rel="noreferrer"
        >
          index-only scan
        </a>{" "}
        meant that queries would only check over the auto incrementing ID and save time by ignoring
        the rest of the table’s data (also known as the “heap”).
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        Just to be sure, I seeded both databases and benchmarked individual query time against each
        other. With a bit of performance tuning and optimization, I was able to achieve the
        following results:
      </p>
    </div>
    <h4>MongoDB:</h4>
    <img className={styles.image} src="/mongospeed.jpg" alt="query speed on mongodb" />
    <h4>PostgreSQL:</h4>
    <img className={styles.image} src="/postgresspeed.jpg" alt="query speed on postgresql" />
    <div className={styles.container}>
      <p className={styles.text}>
        Sure enough, PostgreSQL saw an all around faster querying speed.
      </p>
    </div>
    <h3 className={styles.sectionHeader}>Stress Testing on Local Machine</h3>
    <div className={styles.container}>
      <p className={styles.text}>
        Now it was time to simulate virtual users making multiple queries on our local machine. I
        opted to use{" "}
        <a href="https://k6.io/open-source/" target="_blank" rel="noreferrer">
          k6
        </a>{" "}
        as it mimicked traffic spikes by rapidly increasing and decreasing the load in stages.
      </p>
    </div>
    <img className={styles.image} src="/k6.jpg" alt="k6 setup" />
    <div className={styles.container}>
      <p className={styles.text}>
        What this test is saying is that over the duration of ‘X’ seconds, slowly ramp up to ‘X’
        amount of virtual users making requests. At our breaking point, we aimed to ramp up to 300
        requests over 20 seconds. While certainly not a lot to handle, it was interesting to see how
        it would affect the speed of my laptop’s response time (otherwise known as latency).
      </p>
    </div>
    <img className={styles.image} src="/k6metrics.jpg" alt="k6 metrics" />
    <div className={styles.container}>
      <p className={styles.text}>
        While the above data may seem confusing at first, pay close attention to the line
        &quot;http_req_waiting&quot;. This represents the time waiting for a response from the
        remote host.{" "}
        <a href="https://newrelic.com/" target="_blank" rel="noreferrer">
          New Relic
        </a>{" "}
        does a clearer job of depicting the latency.
      </p>
    </div>
    <img className={styles.image} src="/newrelic.jpg" alt="newrelic metrics" />
    <div className={styles.container}>
      <p className={styles.text}>
        On average, a request takes 365 ms to process. According to k6, at the peak of 300 virtual
        users, a request could take as long as two whole seconds! Compared to individual query times
        of around 1-2 ms, this was certainly a loss in performance. To do better, we needed to
        scale.
      </p>
    </div>
    <h3 className={styles.sectionHeader}>Deploying on an EC2 Instance</h3>
    <div className={styles.container}>
      <p className={styles.text}>
        Two commonly known techniques to handle more traffic are vertical scaling and horizontal
        scaling. To put it as simply as possible, vertical scaling works by adding more power (CPU,
        RAM) to an existing machine. Imagine a computer that grows to handle more stress by getting
        taller and taller (i.e. growing vertically). On the other hand, horizontal scaling means the
        computer size stays the same but we lessen the individual load by adding more same-sized
        computers to the mix. Imagine a net made up of computers that grows horizontally to
        distribute the traffic load evenly. For learning purposes, we decided to see what strategies
        we could employ by horizontally scaling using AWS T2 micro instances.
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        Starting off with a single instance, I simulated 500 responses per second (RPS) over 1
        minute using{" "}
        <a href="https://loader.io/" target="_blank" rel="noreferrer">
          Loader.io
        </a>
        .
      </p>
    </div>
    <img className={styles.image} src="/80ms.jpg" alt="80ms at 500rps" />
    <div className={styles.container}>
      <p className={styles.text}>
        80 ms response time on average at a 0% error rate. Not bad; certainly better than our local
        machine. Now how about 1000 RPS?
      </p>
    </div>
    <img className={styles.image} src="/497ms.jpg" alt="497ms at 1000rps" />
    <div className={styles.container}>
      <p className={styles.text}>
        The RPS climbed dramatically and the error rate shot up to 34.8%. Certainly not the user
        experience we would want to see on a production level site. Let’s see how we improved those
        numbers.
      </p>
    </div>
    <h3 className={styles.sectionHeader}>Load Balancing and Horizontal Scaling</h3>
    <div className={styles.container}>
      <p className={styles.text}>
        We briefly discussed the concept of horizontal scaling earlier, but how is it done? Turns
        out there were many ways of distributing the traffic over multiple server instances (also
        known as load balancing). After some research, I settled on using a popular, open-source
        software known as{" "}
        <a href="https://www.nginx.com/" target="_blank" rel="noreferrer">
          NGINX
        </a>
        .
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        While there was a brief learning curve, the setup went smoothly given clear{" "}
        <a
          href="http://nginx.org/en/docs/http/load_balancing.html"
          target="_blank"
          rel="noreferrer"
        >
          documentation
        </a>{" "}
        on what to do. After launching a second EC2 instance and a separate NGINX instance, I linked
        the three together in the configuration file like so:
      </p>
    </div>
    <img className={styles.image} src="/config.jpg" alt="2 servers config" />
    <div className={styles.container}>
      <p className={styles.text}>
        Now requests being sent to the NGINX server’s endpoint would be distributed between both
        servers, thus lessening the strain on each individual one. It’s important to note that only
        one database is being shared between the two servers.
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        With two servers and a functioning load balancer, I booted up Loader.io again:
      </p>
    </div>
    <img className={styles.image} src="/532ms.jpg" alt="532ms at 1000rps" />
    <div className={styles.container}>
      <p className={styles.text}>
        Where 1000 RPS had previously drawn an error rate of 34.8% and a latency of almost 500 ms,
        we now had a 0% error rate at a latency of 74 ms. Woot!
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>Let’s see how far we can take this…</p>
    </div>
    <img className={styles.image} src="/424ms.jpg" alt="424ms at 2400rps" />
    <div className={styles.container}>
      <p className={styles.text}>
        We made it all the way to 2400 RPS before reaching an error threshold of 50%. An incredible
        feat compared to a single running server. However, error rates started increasing at as
        little as 1500 RPS. For a practical user experience, we could not allow for errors like
        that. We had to do even better.
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        I scaled up to five separate instances and recorded the results each step of the way.
      </p>
    </div>
    <img className={styles.image} src="/aws.jpg" alt="aws setup" />
    <div className={styles.container}>
      <p className={styles.text}>
        Along the way I noticed a few things. As shown above, the difference between one server and
        two was night and day. However returns certainly diminished by server four and five.
      </p>
    </div>
    <h4>2500 RPS at server 4:</h4>
    <img className={styles.image} src="/436ms.jpg" alt="436ms at 2500rps" />
    <h4>2500 RPS at server 5:</h4>
    <img className={styles.image} src="/362ms.jpg" alt="362ms at 2500rps" />
    <div className={styles.container}>
      <p className={styles.text}>
        As depicted above, performance rates were actually worse with five servers. External factors
        or not, it was time to employ new strategies. The NGINX documentation mentioned two possible
        options for load balancing. The default was &quot;round-robin&quot;, where requests would be
        sent to each server following the same order. There was also the option of
        &quot;least-conn&quot;, where requests would be sent to the server most available to handle
        a new request. We tried that out:
      </p>
    </div>
    <h4>2800 RPS round-robin:</h4>
    <img className={styles.image} src="/roundrobin.jpg" alt="379ms at 2800rps round-robin" />
    <h4>2800 RPS least-conn:</h4>
    <img className={styles.image} src="/leastconn.jpg" alt="391ms at 714rps least-conn" />
    <div className={styles.container}>
      <p className={styles.text}>
        As pictured, we achieved a dip in latency and error rate when after switching over to
        least-conn. Not bad!
      </p>
    </div>
    <h3 className={styles.sectionHeader}>Caching</h3>
    <div className={styles.container}>
      <p className={styles.text}>
        Another optimization tweak NGINX offered was{" "}
        <a href="https://www.nginx.com/blog/nginx-caching-guide/" target="_blank" rel="noreferrer">
          data caching
        </a>
        . The idea of caching is that data gets stored in an accessible location, such that next
        time the data is called the server needs not reach all the way into the database to acquire
        it.
      </p>
    </div>
    <img className={styles.image} src="/caching.jpg" alt="5 servers config" />
    <div className={styles.container}>
      <p className={styles.text}>
        Notice the least_conn and caching directives. With this in play, we ran our Loader.io again.
      </p>
    </div>
    <div className={styles.container}>
      <p className={styles.text}>
        After{" "}
        <a href="https://www.dropbox.com/home/SDC%20Metrics" target="_blank" rel="noreferrer">
          multiple tests
        </a>
        , I arrived at the highest RPS with 0% error rate.
      </p>
    </div>
    <img className={styles.image} src="/420ms.jpg" alt="420ms at 2100rps" />
    <div className={styles.container}>
      <p className={styles.text}>
        I was able to handle 2100 RPS with 67 ms latency. It took 4 load balancers, least_conn, and
        caching to achieve this result. Compared to 80 ms latency at 500 RPS, I would say the
        experimenting has led to a success.
      </p>
    </div>
    <h3 className={styles.sectionHeader}>Conclusion</h3>
    <div className={styles.container}>
      <p className={styles.text}>
        At the end of the day, my team and I learned a lot about what it takes for a production
        level site to handle traffic. We were exposed to the limitations of certain strategies and
        realized that tradeoffs were required when it came to optimizing a server. As it holds true
        for most cases in programming, there’s no one-size-fits-all method for server improvement.
        Overall, the main take away would be to keep benchmarking and testing new strategies to
        further optimize results. I hope you enjoyed following me on this journey and gained some
        knowledge or even inspiration from it. Remember, stay focused and always stay learning!
      </p>
    </div>
  </div>
);

export default SDC;
