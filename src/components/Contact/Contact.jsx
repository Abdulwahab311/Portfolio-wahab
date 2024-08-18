import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2><q> Contact </q></h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:wahabnadeem311@gmail.com">wahabnadeem311</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abdul-wahab-nadeem-9a303a2aa/">Abdulwahab311</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Abdulwahab311">Abdulwahab311</a>
        </li>
        <div className={styles.link}>
        <a href="https://wa.me/923077231232" target="_blank">
        <FaWhatsapp  className={styles.FaWhatsapp}/>
        <h1 className={styles.click}> AbdulWahab</h1></a>
        </div>
      </ul>
    </footer>
  );
};
