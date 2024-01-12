import React from "react";

import styles from "./styles.module.scss";

const About = () => (
  <div className={styles.root}>
    <img className={styles.image} src="/me.jpg" alt="me in Mexico City" />
    <p>
      In 2018, while waiting for a developer to patch a bug in my non-technical role, I decided to
      see if I could do it myself. The result was my first line of code and a passion that has been
      growing ever since.
    </p>
    <p>
      In 2020, I joined an early-stage delivery startup as the third full-stack engineer, rapidly
      ideating, developing, and maintaining features across all angles of the product. Given the
      fast paced nature I took on various ad hoc roles as well, ranging from designer to DevOps to
      warehouse worker. Over my tenure, the company expanded from a single location to seven across
      three different schools and grown to an estimated $30 million valuation. In 2022, I
      transitioned to a much larger software enterprise environment at Optum, where I currently work
      with high-risk transactional data and provide user account functionality to over 20 million
      monthly users.
    </p>
    <p>
      I have had the privilege of being a panelist for Career Karma, MissionBit, and HackReactor,
      detailing my journey of breaking into the tech industry and sharing tips on how to succeed in
      both the job search and role itself. I frequently lead coding workshops through a program
      called MissionBit, whose purpose is to provide high school students with the computer science
      education not taught in their curriculums. Through the same program, I enjoy mentoring
      students entering college one-on-one, preparing them for school and future career endeavors.
    </p>

    <p>
      Outside of work, I am an active member and the current president of my Toastmasters club.
      Public speaking has been a significant journey for me, and I find great reward in helping
      others reach their goals. My dream is to combine my technical abilities in software with my
      passion for public speaking to develop platforms that will enable people to build their social
      skills from the comfort of their own homes.
    </p>

    <p>
      In my free time, you can find me playing basketball, hip-hop dancing, or drawing in my
      sketchbook.
    </p>
  </div>
);

export default About;
