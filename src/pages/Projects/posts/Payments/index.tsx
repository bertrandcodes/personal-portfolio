import React from "react";

import { ScrollIndicator, SeoData } from "@components";
import { FurtherReading, TOC } from "../../components";
import styles from "../styles.module.scss";

const Payments = () => (
  <div className={styles.root}>
    <TOC />
    <div className={styles.container}>
      <SeoData
        title="Payment Management | Bertrand Shao"
        description="Dive into my experience managing payments at Duffl."
      />
      <ScrollIndicator />
      <div className={styles.center}>
        <h1>Credit Card and Payment Management</h1>
        <h2 className={styles.subheader}>Implementation and Challenges</h2>
      </div>
      <img
        className={styles.hero}
        src="/paymentprocessorhero.png"
        alt="payment processor graphic"
      />
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptions}>
          <div>
            <span className={styles.descriptor1}>Timeline</span>
            <span className={styles.descriptor2}>4 Month (January 2021 - April 2021)</span>
          </div>
          <div>
            <span className={styles.descriptor1}>Role</span>
            <span className={styles.descriptor2}>Lead Full-Stack Engineer</span>
          </div>
          <div>
            <span className={styles.descriptor1}>Core Responsibilities</span>
            <span className={styles.descriptor2}>Frontend, Backend, Visual Design</span>
          </div>
        </div>
        <p className={styles.subtext}>
          <i>
            An overview of my journey implementing multiple payment processing methods for Duffl,
            including the rationale behind these decisions and the challenges encountered along the
            way. If you don’t know what Duffl is, check{" "}
            <a href="/projects/restocking">this project</a> out.
          </i>
        </p>
      </div>
      <h3 className={styles.sectionHeader} id="early">
        Early Payment System
      </h3>
      <p className={styles.text}>
        During the initial stages of our startup, customers used what we dubbed our &quot;Hacky
        Venmo&quot; method to pay for orders.
      </p>
      <p className={styles.text}>
        To explain this process briefly, a customer looking to fulfill their order would be
        instructed to go on either Venmo or Cash App and send us the correct amount.
      </p>
      <p className={styles.text}>
        Meanwhile on our side, a cleverly devised function subscribed to an email service webhook
        would wait for and extract payment information from the successful transaction email and
        then attempt to fulfill the corresponding order.
      </p>
      <p className={styles.text}>
        This approach proved highly effective for a startup catering to a college-aged user
        demographic that preferred Venmo over traditional credit card payments. However, as our
        business expanded, we encountered various limitations. For starters, we could not afford to
        rely on the stability of email servers for our sole payment processor. Secondly, as we later
        found out from our account being temporarily frozen, the process itself violated Venmo’s
        terms and services. It became clear that we urgently needed a robust payment processing
        solution capable of scaling with our growing business.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/venmocode.jpg" alt="snippet of venmo parsing code" />
        <p>
          A snippet of the email parser service. As you can see we were locating information by
          using the email’s CSS as an anchor. Talk about flaky!
        </p>
      </div>
      <h4 className={styles.sectionHeader}>Credit Cards</h4>
      <p className={styles.text}>
        As our user base expanded to faculty, graduate students, and members of the nearby
        communities, we hypothesized that customers who order with credit cards would convert at a
        higher rate than customers who we redirect to another app.
      </p>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <video className={styles.video} autoPlay playsInline loop muted>
          <source src="/firstorder.mov" type="video/mp4" />
        </video>
        <p>
          January 7th, 2021. History was made. Our first successful credit card test order ever! I
          took UI design inspiration from our big brother Doordash.
        </p>
      </div>
      <h3 className={styles.sectionHeader} id="stripe">
        Stripe
      </h3>
      <p className={styles.text}>
        I debuted credit cards into our payment processing options by integrating Stripe. Low fees
        and YC credits made it the obvious financial choice. Great documentation and a
        straightforward Javascript SDK made the integration a hassle-free experience. Unique keys in
        the header of requests called idempotency keys prevented duplicate transactions and improved
        reliability without much work on our end.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/stripediagram.png" alt="diagram of how Stripe integrates into our system" />
        <p>Overview of how Stripe integrates into our system.</p>
      </div>
      <h3 className={styles.sectionHeader} id="hrt">
        Authorize.net
      </h3>
      <p className={styles.text}>
        With the introduction of alcohol and 21+ products into our store, we needed a high-risk
        transaction (HRT) processor. Between higher fees and sparse documentation, choosing the
        right HRT processor proved much less straightforward than deciding on Stripe. After weighing
        factors such as UI integration flexibility and dashboard extensibility we settled on
        Authorize.net.
      </p>
      <div className={styles.mediaWithDescription}>
        <img
          src="/authorizenetdiagram.png"
          alt="diagram of how Authorize.net integrates into our system"
        />
        <p>Overview of how Authorize.net integrates into our system.</p>
      </div>
      <h4 className={styles.sectionHeader}>Challenges</h4>
      <div className={styles.text}>
        <ul>
          <li>
            Communication with the processor required our server-side client to use verbose XML.
          </li>
          <li>
            In contrast to Stripe, Authorize.net does not offer idempotency keys. Duplicate
            transactions with identical amounts from the same payment profile are automatically
            blocked. However, this posed an issue for users deliberately placing the same order back
            to back. To fix this, I had to manually configure a transaction window to catch
            potential network-related duplicate transactions, but not block separate orders with the
            same cart value.
          </li>
        </ul>
      </div>
      <div className={styles.mediaWithDescription}>
        <img src="/orderattempt.jpg" alt="snippet of OrderAttempt class code" />
        <p>
          The OrderAttempt class prevents duplicate transactions, an issue that idempotency keys are
          normally supposed to cover.
        </p>
      </div>
      <h3 className={styles.sectionHeader} id="braintree">
        Braintree
      </h3>
      <p className={styles.text}>
        To make use of free YC credits and broaden payment alternatives, I introduced Braintree to
        support Venmo (this time legally), Apple Pay, and Google Pay.
      </p>
      <div className={styles.mediaWithDescription}>
        <img
          src="/braintreediagram.png"
          alt="diagram of how Braintree integrates into our system"
        />
        <p>Overview of how all processors integrates into our system.</p>
      </div>
      <h4 className={styles.sectionHeader}>Challenges</h4>
      <p className={styles.text}>
        After implementation, we began receiving numerous bug reports regarding a mobile issue. With
        some detective work, I traced the issue to a difference in mobile browser behavior.
        Normally, we expect that selecting the Venmo option would send users from the mobile web
        view to the Venmo app. Upon confirmation in the app, users would be redirected back to the
        web page, where a one-time nonce would be ingested, guiding them to the payment pending
        page. However, some mobile browsers would open a new tab instead of returning to the
        original, thereby clearing the state necessary to complete the flow. To fix this I persisted
        the nonce in the URL params and conditionally ran a separate flow when this URL nonce was
        present.
      </p>
      <h3 className={styles.sectionHeader} id="together">
        Tying Everything Together
      </h3>
      <p className={styles.text}>
        With conditional logic increasing with each new solution, so did the need for a payment
        processor abstraction we could easily interface with on the backend. As a solution, I
        introduced a CustomerCard table with columns for{" "}
        <span className={styles.code}>stripe_payment_method_id</span>,
        <span className={styles.code}>braintree_payment_method_token</span>, and
        <span className={styles.code}>authorizenet_payment_profile_id</span> to represent a single
        card to display on the UI. Following PCP compliance, these cards are uniquely identified by
        <span className={styles.code}>last_four_digits</span>,{" "}
        <span className={styles.code}>expiration_month</span>, and
        <span className={styles.code}>expiration_year</span>. When the user reaches the payment
        screen, a call to the /cards endpoint returns an array of available cards tied to a user for
        the UI to display. Users are also able to set a default payment method.
      </p>
      <div className={styles.mediaWithDescription}>
        <img src="/customercardcode.jpg" alt="code snippet of the customer card model" />
        <p>The CustomerCard class that represents a single card to be displayed on the UI.</p>
      </div>
      <h3 className={styles.sectionHeader} id="design">
        Design Considerations
      </h3>
      <h4 className={styles.sectionHeader}>Visual Design</h4>
      <p className={styles.text}>
        I had to decide between two versions of the card collection UI: one using some creative CSS
        and one more traditional. Though I was proud of the former, the majority of feedback and
        votes leaned towards the latter, with users providing valid reasoning that sensitive data
        such as credit card information should adhere to standard conventions as much as possible.
      </p>
      <div className={styles.mediaGroup}>
        <div>
          <img src="/carddesign1.png" alt="first card collection UI design" />
          <p>First card collection UI design.</p>
        </div>
        <div>
          <video className={styles.video} autoPlay playsInline loop muted>
            <source src="/carddesign2.mov" type="video/mp4" />
          </video>
          <p>Second card collection UI design.</p>
        </div>
      </div>
      <h4 className={styles.sectionHeader}>21+ Cart Flow Design</h4>
      <p className={styles.text}>Imagine this scenario.</p>
      <p className={styles.text}>
        A few days ago you recently saved a card and placed an order. Today, you are placing an
        order with a 21+ item, but you have not created an Authorize.net card yet. You land on the
        review order page and see that not only is the card you previously saved no longer shown,
        but a brand new UI is trying to collect the same card information again.
      </p>
      <p className={styles.text}>You can imagine this would be a confusing experience.</p>
      <p className={styles.text}>
        With an abstraction of different processors onto fields of a CustomerCard class, we can
        address this scenario without offering more explanation than necessary. If a user checks out
        with a 21+ item, but their card cannot handle HRT, we still display the card as an option.
        If they select that card option, we direct that user to a “Verify Card” flow that is
        visually designed to look identical to the “Add Card” UI (except for terms and conditions
        text). Under the hood, we are using this information to create an HRT profile that later
        gets associated with the{" "}
        <span className={styles.code}>authorizenet_payment_profile_id</span> column on their
        CustomerCard object.
      </p>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <img src="/revieworder.png" alt="review order page" />
        <p>Cards will display even if a user has not saved a card with an HRT processor yet.</p>
      </div>
      <p className={styles.text}>
        Accomplishing this meant achieving visual parity across different processor UI
        implementation libraries. I remember spending a good bit of time figuring out the regex to
        match Stripe’s out-the-box card number input field handling. In the end, just as a customer
        card abstraction on the backend simplifies logic, abstracting away the processors on the UI
        contributes to a more streamlined user journey.
      </p>
      <h3 className={styles.sectionHeader} id="results">
        Results
      </h3>
      <div className={styles.text}>
        Total revenue off card processors one year later: $2,778,841.38
        <ul>
          <li>Stripe: $1,138,636.97</li>
          <li>Authorize.net: $489,463.05</li>
          <li>Braintree: $1,150,741.36</li>
          <li>~160k saved in transaction fees</li>
        </ul>
        Eventually, we were able to enable recurring billing, introduce a subscription model, and
        phase out “Hacky Venmo” completely.
      </div>
      <div
        className={styles.mediaWithDescription}
        style={{ width: "500px", maxWidth: "100%", margin: "3rem auto" }}
      >
        <img src="/revenue.png" alt="total revenue" />
        <p>Not too shabby for a company that once operated solely on Venmo.</p>
      </div>
      <FurtherReading
        src1="/servers.jpg"
        src2="/duffl.jpg"
        title1="A First Dive Into System Design"
        title2="Augmenting Duffl's Restock Process"
        time1="10 min"
        time2="8 min"
        description1="What does it take to generate and insert ten million data points into a database
      efficiently?"
        description2="How might we harness technology to optimize the efficiency of our supply chain processes?"
        link1="sdc"
        link2="restocking"
      />
    </div>
  </div>
);

export default Payments;
