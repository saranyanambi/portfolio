import React ,{useEffect,useState} from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saranya</h1>
        <p className={styles.description}>
          I'm a front-end developer passionate about building sleek, responsive websites and applications.
I’m focused on creating seamless, user-friendly experiences.
Currently, I’m eager to tackle new challenges and collaborate on exciting projects. Feel free to explore my work and reach out if you'd like to connect!
        </p>
        
 
       <div className={styles.emailText}> 
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <p>saranyanambi911@gmail.com</p>
        </div>
      
        <a href="/SARANYA_N-Resume.pdf" download className={styles.contactBtn}>
                  <FontAwesomeIcon icon={faDownload} /> Download Resume
                 
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
