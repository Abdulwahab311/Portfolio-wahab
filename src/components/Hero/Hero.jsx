import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import pdf from "../pdf/ABDUL WAHAB CV (1).pdf"
export const Hero = () => {
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      
        <h1 className={styles.title}><q> Hi </q> I'm Abdul Wahab</h1>
        <p className={styles.description}>
          I'm a Front-end developer with <span>1 years of experience</span> using Html 
          Css Bootstrap Css Tailwind Css Javascrpit React Js And Redux Toolkit.
        </p>
        <a href="mailto:wahabnadeem311@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a
            href={pdf}
            download="ABDUL WAHAB CV (1)"
            className={styles.contactBtn1}
          >
            Download Resume
          </a>
  
      
       
      </div>
      
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg} 
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
