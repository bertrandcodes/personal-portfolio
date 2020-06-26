import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div id="about-body">
      <Helmet>
        <title>About Me | Bertrand Shao</title>
        <meta
          name="description"
          content="Learn about who I am and why I love what I do."
        ></meta>
      </Helmet>
      <div className="about-main">
        {/* <div className="about-image" /> */}
        <div className="about-border">
          <div className="about-text">
            <div className="iframe-container">
              <iframe
                src="https://www.youtube.com/embed/neFW0t7Q51o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="about-paragraphs-first">
              I’ve always been taught to try new things.
            </div>
            <div className="about-paragraphs">
              Growing up in NYC, I practiced fine arts and played computer
              games. As a teen, I played a variety of sports and my favorite
              subject was Math. Upon attending UCLA, I studied psychobiology and
              participated on a collegiate dance team. I truly loved everything
              I took an interest to. “But what do you want to do for a living?”
              For some reason, I just didn’t know.
            </div>
            <div className="about-paragraphs">
              The same feeling that would peak my interest was the same feeling
              that left me unsatisfied. My hobbies ranged far and wide and yet
              they always seemed at odds with one another. My mind worked well
              with numbers and data while my heart yearned for a creative
              outlet. I loved team dynamics, but I worked best solo. The concept
              of fitting into a <span>single</span> role for life seemed
              farfetched.
            </div>
            <div className="about-paragraphs">
              Working in Search Engine Optimization (SEO), I felt the closest
              yet to my calling. Keeping up with changing technology was a
              thrill. Using creative skills to churn out graphics and fresh
              content scratched that itch to create. Working in technologies
              felt natural after a lifetime’s worth of Runescape hours. But
              whenever a problem arose we always had to contact a developer.
              Most times they were slow to respond and we would be helpless
              against a bug. So one day I thought- why not me? Perhaps I could
              fix it instead of waiting. So I dug around a bit. Then dug deeper.
              And deeper. And deeper…
            </div>
            <div className="about-paragraphs">
              I don’t think I found a fix to that bug that day. But what I found
              instead was an answer to a life time of uncertainty. I discovered
              an interest in looking at code. That led to an interest in playing
              with it. Before long I was exposed to a field with endless paths
              and a hobby with infinite creative potential. Here was a world
              where I could use my logic to wrestle large and complex puzzles-
              some of which have never been solved before. At the same time I’m
              offered a digital canvas and unlimited mediums to paint with. So I
              started practicing.
            </div>
            <div className="about-paragraphs">I haven’t looked back since.</div>
            <div className="about-paragraphs">
              I’ve worn many hats in life, but none quite fit me like web
              development. All that’s left now is to follow this road while
              honing my craft and enjoying it each and every day. A lifetime’s
              worth of journeys await.
            </div>
            <div className="about-paragraphs-last">Bertrand Shao</div>
          </div>
        </div>
      </div>
    </div>
  );
}
