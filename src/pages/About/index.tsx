import React from "react";

import styles from "./styles.module.scss";

const About = () => (
  <div className={styles.root}>
    <div className={styles.image} />
    <h1 className={styles.header}>A little bit about me...</h1>
    <p className={styles.text}>
      In 2018, while waiting for a developer to patch a bug in my non-technical role, I tried to fix
      the issue myself. The result was my first line of code and a passion that has been growing
      ever since.
    </p>
    <p className={styles.text}>
      In 2020, I joined an early-stage delivery startup as the third full-stack engineer and dove
      headfirst into ideating, developing, and maintaining features across all facets of the
      product. Given the fast paced nature I took on various ad hoc roles as well, ranging from
      designer to DevOps to warehouse worker. Over my tenure, the company expanded from a single
      location to seven across three different schools and grew to an estimated $30 million
      valuation. In 2022, I transitioned to a much larger software enterprise environment at Optum,
      where I currently work with high-risk transactional data and provide user account
      functionality to over 20 million monthly users.
    </p>
    <p className={styles.text}>
      I have had the privilege of participating on panels at Career Karma, MissionBit, and Hack
      Reactor, detailing my journey breaking into the tech industry and sharing tips on how to
      succeed in both the job search and role itself. I frequently lead coding classes and workshops
      through a program called MissionBit, whose purpose is to provide high school students with the
      computer science education not taught in their school&apos;s curriculum. Through the same
      program, I enjoy mentoring students entering college one-on-one, preparing them for academia
      and future career endeavors.
    </p>

    <p className={styles.text}>
      Outside of work, I am an active member and the current president of a Toastmasters club.
      Public speaking has been a significant journey for me, and I find great fulfillment in helping
      others reach their own goals. My dream is to combine my technical abilities in software with
      my passion for public speaking and develop platforms that will enable people to build their
      social skills from the comfort of their own homes.
    </p>

    <p className={styles.text}>
      In my free time, you can find me playing basketball, hip-hop dancing, or doodling in my
      sketchbook.
    </p>
  </div>
);

export default About;
