import React from "react";
import { TiTick } from "react-icons/ti";

// CSS Modules
import styles from "../styles/aboutPage.module.css";

// Components

export default function AboutPage() {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.aboutContent}>
        <div className={styles.userContact}>
          <div className={styles.userProfile}>
            <div className={styles.userPic}>
              <img src="./author_img.jpg" alt="author image" srcset="" />
            </div>
          </div>
          <h3 className={styles.authorName}>Pritam Satapathy</h3>
          <h3 className={styles.authorEmail}>pritamsatapathy@gmail.com</h3>
          <button className={styles.cvDownloadBtn}>CV Download</button>
        </div>
        <div className={styles.userDetails}>
          <div className={styles.aboutMe}>
            <h2 className={styles.aboutMeTitle}>About me</h2>
            <h3 className={styles.availableStatus}>
              <span className={styles.icon}>
                <TiTick />
              </span>
              <span>Open to Work</span>
            </h3>
            <div className={styles.aboutText}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis iure nisi perferendis blanditiis nesciunt ut!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus aliquid velit assumenda commodi. Aliquam unde vero
                perspiciatis praesentium laboriosam rerum.
              </p>
            </div>
          </div>
          <div className={styles.roles}>
            <h3 className={styles.rolesTitle}>Latest Roles</h3>
            <div className={styles.rolesContainer}>
              <div className={styles.roleCard}>
                <div className={styles.brandImage}>
                  <img src="" alt="" srcset="" />
                </div>
                <div className={styles.roleDetails}>
                  <div className={styles.designation}>UI Designer</div>
                  <div className="styles.brandName">Specialized Bicycle</div>
                </div>
              </div>
            </div>
            <div className={styles.appsUsed}>
              <h3 className={styles.appsTitle}>Main Apps</h3>
              <div className={styles.appsWrapper}>
                <div className={styles.appCard}>
                  <div className={styles.appLogo}>
                    <img src="" alt="" srcset="" />
                  </div>
                  <h4 className={styles.appName}>Figma</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
