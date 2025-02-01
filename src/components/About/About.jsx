import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Hi, I’m  a passionate front-end developer eager to bring creative websites and applications to life.

I’ve developed a strong foundation in HTML, CSS, JavaScript, and modern front-end frameworks like React. I’m constantly learning new tools and best practices to stay up to date with the fast-evolving world of web development.

I love turning complex ideas into simple, user-friendly interfaces that people enjoy interacting with. I believe in clean code, responsive design, and creating seamless user experiences.

While I’m just starting my career, I’ve worked on several personal projects and that have helped me hone my skills. I’m excited to apply my knowledge and grow as a developer, collaborating on real-world projects that make a difference.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
