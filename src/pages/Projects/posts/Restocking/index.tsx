import React from "react";

import { Phone, ScrollIndicator, SeoData } from "@components";
import { FurtherReading, TOC } from "../../components";
import styles from "../styles.module.scss";

const Restocking = () => (
  <div className={styles.root}>
    <TOC />
    <div className={styles.container}>
      <SeoData
        title="Restocking at Duffl | Bertrand Shao"
        description="Dive into my experience working on Duffl's Supply UI."
      />
      <ScrollIndicator />
      <div className={styles.center}>
        <h1>Augmenting Duffl&apos;s Restock Process</h1>
        <h2 className={styles.subheader}>Creating the Supply UI</h2>
      </div>
      <img className={styles.mainImage} src="/insideduffl.png" alt="Duffl logo" />
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptions}>
          <div>
            <span className={styles.descriptor1}>Timeline</span>
            <span className={styles.descriptor2}>4 Month (March 2021 - June 2021)</span>
          </div>
          <div>
            <span className={styles.descriptor1}>Role</span>
            <span className={styles.descriptor2}>Lead Full-Stack Engineer</span>
          </div>
          <div>
            <span className={styles.descriptor1}>Core Responsibilities</span>
            <span className={styles.descriptor2}>UX Design, Frontend, Backend</span>
          </div>
        </div>
        <p className={styles.subtext}>
          <i>
            Read about my journey designing and developing custom full-stack software to alleviate
            the growing pains of a $30M delivery startup.
          </i>
        </p>
      </div>
      <h3 className={styles.sectionHeader} id="duffl">
        What is Duffl?
      </h3>
      <p className={styles.text}>
        Duffl is a convenience store delivery service startup for college students boasting a
        delivery to doorstep time of 10 minutes. The company participated in Y Combinator’s W2020
        batch and raised $12M in Series A funding back in 2021. Currently, Duffl operates at 7
        locations across 3 states. But long before the establishment of large warehouses and
        streamlined systems came humble beginnings.
      </p>
      <h4 className={styles.sectionHeader}>The Early Days</h4>
      <p className={styles.text}>
        Upon the arrival of shipments, each product underwent manual assignment of inventory count
        and location. Locations included shelves, fridges, and freezers of varying sizes which posed
        space constraints issues. We determined future shipments based on the number sold in the
        previous week and naively updated inventory after restocking and sales. As far as the
        restocking process, a restocker would consult a central inventory page, where inputting a
        product name would yield a product photo, inventory amount, and locations to which it
        belonged.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/restocking.jpg" alt="early restocking process at Duffl" />
        <p>The earliest stages involved Costco runs and only a few storage rooms with shelves.</p>
      </div>
      <h3 className={styles.sectionHeader} id="problem">
        Problem
      </h3>
      <div className={styles.text}>
        As the business grew and demands increased, we were able to expand into a much larger
        warehouse space and greatly increase stock across products. However, we soon discovered that
        higher volume meant a compounding increase in existing efficiency issues. Looking into the
        data, we identified several challenges and bottlenecks:
        <ul>
          <li>Frequent overstock and understock across products</li>
          <li>Lack of accurate inventory insight led to popular items running out of stock</li>
          <li>No visibility into product cost patterns</li>
          <li>Excessive time dedicated to maintaining product organization</li>
          <li>
            The assembly time for couriers to put together an order increased as the store became
            more crowded
          </li>
          <li>
            Lack of a means to discern the time of purchase results in the wastage of perishable
            goods
          </li>
        </ul>
      </div>
      <div className={styles.mediaWithDescription}>
        <img src="/warehouse.png" alt="inside of Duffl" />
        <p>The inside of our second location, where more space meant more problems...</p>
      </div>
      <h3 className={styles.sectionHeader} id="design">
        Design Process
      </h3>
      <p className={styles.text}>
        As an engineering team, we agreed that a scalable solution lies in technology. To ensure a
        robust product that addresses the correct issues, I employed various research techniques to
        ensure user-centric design.
      </p>
      <h4 className={styles.sectionHeader}>User Survey</h4>
      <p className={styles.text}>
        Surveys were conducted among 35 warehouse managers and restockers, out of which 27
        responded. The objective was to identify pain points in the restocking and buying process.
        Participants were incentivized by being awarded a $10 order discount on completion. The
        survey was administered through Google Forms and data was organized and analyzed on Miro.
        Warehouse managers handled the buying process and restockers handled restocking, however,
        since most employees have experience on both sides the questions were not specific to a
        particular role. Questions were designed based on the challenges listed above and meant to
        collect both quantitative and qualitative data.
      </p>
      <h5 className={styles.sectionHeader}>Quantitative Questions</h5>
      <div className={styles.text}>
        <ul>
          <li>On a scale of 1 to 5, how satisfied with you with the current restocking process?</li>
          <li>
            On a scale of 1 to 5, how satisfied with you with the current order-buying process?
          </li>
          <li>
            How often do you encounter errors or inaccuracies in shipment quantity while restocking?
            (Multiple times a day, Daily, Weekly, Monthly, Rarely)
          </li>
        </ul>
      </div>
      <h5 className={styles.sectionHeader}>Qualitative Questions</h5>
      <div className={styles.text}>
        <ul>
          <li>What are the biggest challenges you face while restocking?</li>
          <li>What are the biggest challenges you face while buying an order?</li>
          <li>What is the biggest issue you see that leads to problems in the store?</li>
        </ul>
      </div>
      <div className={styles.mediaWithDescription}>
        <img src="/usersurvey.jpg" alt="user survey results" />
        <p>
          Qualitative responses were grouped by the needs they represented and color-coded by the
          question they came from
        </p>
      </div>
      <h5 className={styles.sectionHeader}>Key findings</h5>
      <div className={styles.text}>
        I conducted a thematic analysis by grouping qualitative responses by the needs they
        represented and presented these as key findings:
        <ul>
          <li>
            There is a need to keep track of every product from the moment it is purchased from the
            supplier to the moment it is restocked
          </li>
          <li>
            There is a need to provide employees with specific instructions and calculations to
            minimize error rates
          </li>
          <li>There is a need to offer a better visual representation of the store</li>
        </ul>
      </div>
      <h5 className={styles.sectionHeader}>Wireframes</h5>
      <p className={styles.text}>
        I created a wireframe on Figma that addressed each of the newly discovered needs.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/supplywireframe.png" alt="wireframe for buying and restocking flows" />
        <p>Wireframes for the buying and restocking flows that I presented to the team.</p>
      </div>
      <h5 className={styles.sectionHeader}>Usability Testing</h5>
      <p className={styles.text}>
        To evaluate the usability and effectiveness of the design, I conducted a moderated user
        testing session where participants consisting of warehouse managers and restockers were
        instructed to “click” through the flow by physically interacting with the printed prototype.
      </p>
      <h3 className={styles.sectionHeader} id="solution">
        Solution
      </h3>
      <p className={styles.text}>
        Based off the data that was collected, we needed an easy-to-use user interface to present
        warehouse managers with visibility and management options for each product. Within this
        implementation, we also wanted to reduce points of friction from the existing
        buying/restocking process and empower users to make informed decisions by offering
        algorithmically based recommendations along the way.
      </p>
      <div className={styles.text}>
        A two-part solution was proposed:
        <ul>
          <li>
            Inventory UI: A user interface and system that works together to track and manage
            inventory details of various product abstractions in our store.
          </li>
          <li>
            Supply UI: A user interface to assist with the buying and restocking process and the
            corresponding backend functionalities to support recommendations and interactions with
            the inventory system. I led the charge on this project and will be spending the rest of
            this article detailing my implementation.
          </li>
        </ul>
      </div>
      <div className={styles.mediaWithDescription}>
        <img src="/inventory.png" alt="a look at the inventory UI" />
        <p>
          The completed view of Inventory UI for product tracking and management, designed and
          implemented by Elliot Fouts.
        </p>
      </div>
      <h3 className={styles.sectionHeader} id="frontend">
        Frontend
      </h3>
      <h4 className={styles.sectionHeader}>Overview</h4>
      <div className={styles.text}>
        The user interface is located within our internal admin subdomain which is built on top of
        React. Opening Supply on the menu reveals three subtabs: Buying, Restocking, and Completed.
        Each page supports a:
        <ul>
          <li>
            Table view with each row representing a “restock order” and relevant column labels
            between tabs.
          </li>
          <li>
            Filter/Unfilter by date function that defaults to the current day. This feature is
            particularly useful for reviewing past restocked orders for potential issues and
            planning for upcoming orders to place.
          </li>
          <li>
            Debounced search input that sends query params to the backend and receives a filtered
            set of orders to display.
          </li>
          <li>
            Custom pagination component that sends the page number stored in URL param to the
            backend and receives a filtered set of orders to display.
          </li>
        </ul>
      </div>
      <h4 className={styles.sectionHeader}>Buying Tab</h4>
      <p className={styles.text}>
        The Buying tab supports an option to generate a new order based on the supplier, expected
        delivery date, and new restock date. A backend algorithm, detailed later in this post, puts
        together a recommended order for the warehouse manager to place with the supplier. The
        warehouse manager can make changes they see fit or opt to start a blank order from scratch.
        This feature reduces user error by taking the legwork out of thinking and creates an order
        representation for us to track in our system.
      </p>
      <div className={styles.mediaWithDescription}>
        <video className={styles.video} autoPlay playsInline loop muted>
          <source src="/buying.mov" type="video/mp4" />
        </video>
        <p>
          The process of generating an order which a warehouse manager can later edit and place.
        </p>
      </div>
      <h4 className={styles.sectionHeader}>Restock Order Tab</h4>
      <p className={styles.text}>
        Clicking into a restock order on any of the tabs will take you to a table view of the order
        itself complete with all the items and details. Because this view is primarily used for
        facilitating the active restocking process, I built it with a responsive design in mind. The
        flow is as follows:
      </p>
      <Phone src="/restocking.mov" className={styles.iphone} />
      <div className={styles.text}>
        <ol>
          <li>
            The “Expected Arrival” time displayed on the UI aligns with the unloading of multiple
            boxes from a supplier truck
          </li>
          <li>
            Restockers on shift cut open boxes and input items they will be restocking into the
            search bar on the restock order tab of the UI
          </li>

          <li>
            The UI tells them exactly where in the store the item belongs based on the bin label
            deduced by the backend
          </li>
          <li>
            The UI tells the restocker the number of items/packs to expect and allows the restocker
            to make changes if the actual quantity differs from the expected
          </li>
          <li>
            If product details need to be updated dynamically, they may access the product detail
            page directly from the restock modal and edit as necessary
          </li>
          <li>
            To account for expiring goods and reduce waste, the UI collects expiration dates for
            products tagged as perishable
          </li>
          <li>
            Product rows grey out with opacity when completed and once all items have been
            restocked, an order may be marked as completed at which point the order moves to the
            Completed tab
          </li>
        </ol>
      </div>
      <h4 className={styles.sectionHeader}>Challenges</h4>
      <h5 className={styles.sectionHeader}>React rerendering causing flickers</h5>
      <p className={styles.text}>
        In the original hierarchy, some tables were placed lower down in the component tree than the
        input field. As a result, the table element would rerender leading to a flickering
        experience every time a user typed into the search bar. The solution was to anchor all
        modals to the topmost level of the application and control toggling through React context.
      </p>
      <h5 className={styles.sectionHeader}>React.memo() to reduce rerender</h5>
      <p className={styles.text}>
        A few months after release, a ticketing system was introduced that would make a polling API
        call in the background of the admin application every few seconds. This call would trigger a
        rerender of the restock table and cause a flicker. By wrapping the table render function
        with a React.memo(), I successfully prevented rerendering when no props were changed. While
        certainly not everything should be memoized, this was a suitable use case that resulted in a
        bug fix.
      </p>
      <h3 className={styles.sectionHeader} id="backend">
        Backend
      </h3>
      <p className={styles.text}>
        Our backend is built on top of the Django framework and interfaces with a MySQL database. We
        aimed to implement an intelligent system to guide warehouse managers in determining the
        optimal quantity of products for each order. Achieving this would reduce waste, cut down on
        out-of-stock items, lower rates of human error, and overall contribute to a more efficient
        and streamlined ordering process.
      </p>
      <h4 className={styles.sectionHeader}>Rate of Sale</h4>
      <p className={styles.text}>
        The first step requires calculating an item’s rate of sale (ROS). This is determined by # of
        units sold per hour it is available for purchase. To figure out the amount of time an item
        is live over 24 hours, I looked at “In Stock”/“Out of Stock” and “Store Open”/“Store Close”
        markers as depicted below.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/ros.png" alt="equation for rate of sale" />
        <p>
          The highlighted areas on the top line represent the time frame in which an item is
          considered available for purchase.
        </p>
      </div>
      <h4 className={styles.sectionHeader}>Recommended purchase amount</h4>
      <p className={styles.text}>
        Combining ROS with time between restocks gives us the total number of units needed in our
        store. Factoring in current inventory and the amount already purchased gives us the number
        of units we would need to purchase within an order.
      </p>
      <b>
        <p className={styles.text}>
          # units to purchase = # units needed - # already purchased - current inventory
        </p>
      </b>
      <p className={styles.text}>
        Divide by pack size and round up and we get the number of packs to order.
      </p>
      <h4 className={styles.sectionHeader}>Generating a restock order</h4>
      <p className={styles.text}>
        When a user generates a new order from the Buying tab, a post request is sent to the backend
        with the supplier name, expected date, and next restock date. In the backend RestockView, we
        fetch all active products from the store of the given supplier. We get pack size and price
        from a previous RestockItem. Then, we create a new RestockItem instance for each item in the
        order then assign them to the new RestockOrder. Finally, we return the ID of the
        RestockOrder and a paginated list of RestockItems with product info, recommended # packs,
        and pack cost for the UI to display.
      </p>
      <img
        className={styles.image}
        src="/creatingrestockorder.jpg"
        alt="creating restock order flow"
      />
      <h4 className={styles.sectionHeader}>Challenges</h4>
      <p className={styles.text}>
        Calculating the rate of sale for all items proved to be a time-intensive process. Originally
        we performed these calculations as an asynchronous task in Django Q. However, Django Q was
        coupled to our web server and would end up competing for CPU and memory with other
        application functions. To optimize for performance, I offloaded the ROS calculation task to
        RabbitMQ + Celery and a cron job.
      </p>
      <img className={styles.image} src="/celery.jpg" alt="improve performance flow" />
      <h3 className={styles.sectionHeader} id="reflection">
        Reflection
      </h3>
      <p className={styles.text}>
        As a result of better tracking and inventory management, we achieved a lower overall
        out-of-stock rate across all products. The improved organization allowed us to maintain low
        pick and pack times even as order volume increased. The ability to input and view expiration
        dates as a part of the restocking process reduced waste from expiring perishables. We
        significantly reduced the number of steps necessary to replenish products while at the same
        time significantly cutting down on user error. All said and done, we were able to achieve
        volumes of 700+ orders per day.
      </p>
      <p className={styles.text}>
        To successfully program software requiring as much user input as this one, I needed to spend
        time developing away from the computer. Many hours spent in the warehouse crowdsourcing
        feedback and getting my hands dirty led to numerous improvements in this feature over time
        and certainly added to a sense of reward upon completion. This combined with the opportunity
        to embed technology into one of the most labor-intensive aspects of our operation sets this
        project apart as one of the most meaningful products I have delivered so far in my software
        engineering journey. To this day Supply UI remains a source of insight into how a
        well-designed system and the use of technology can lead to a tangible improvement of
        real-world processes.
      </p>
      <FurtherReading
        src1="/servers.jpg"
        src2="/servers.jpg"
        title1="A First Dive Into System Design"
        title2="A First Dive Into System Design"
        time1="8 min"
        description1="What does it take to generate and insert ten million data points into a database
      efficiently?"
        time2="8 min"
        description2="What does it take to generate and insert ten million data points into a database
      efficiently?"
        link1="sdc"
        link2="sdc"
      />
    </div>
  </div>
);

export default Restocking;
