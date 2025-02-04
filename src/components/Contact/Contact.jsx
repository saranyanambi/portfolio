import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.links}>
       <div className={styles.link}>
          
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saranyanambi911@gmail.com" target="_blank"><img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" /></a>
          </div>
       
          <div className={styles.link}>
          <a href="https://www.linkedin.com/in/saranyanambi" target="_blank">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
          </div >
       
          <div className={styles.link}>
          
          <a href="https://github.com/saranyanambi"><img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
          </div>
          
          </div>
    </footer>
  );
};
