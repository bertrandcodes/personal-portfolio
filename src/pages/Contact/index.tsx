import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { SeoData } from "@src/components";
import styles from "./styles.module.scss";

const Contact = () => {
  const form = useRef(null);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yyy7x0l", "template_qeezeww", form.current ?? "", "AkVp4GHGeeVpP6UNC")
      .then(
        (res) => {
          console.log(res.text);
          alert("Your message has been sent!");
        },
        (err) => {
          console.error(err.text);
        },
      );
  };

  return (
    <>
      <SeoData
        title="Contact Me | Bertrand Shao"
        description="Contact me and learn more. I won't bite."
      />
      <div className={styles.root}>
        <h1 className={styles.header}>Let&apos;s collaborate!</h1>
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input id="name" className={styles.input} type="text" name="user_name" />
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input id="email" className={styles.input} type="text" name="user_email" />
          <label htmlFor="message" className={styles.label}>
            Message:
          </label>
          <textarea id="message" className={styles.textarea} name="message" />
          <button type="submit" className="btn btn-dark">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
