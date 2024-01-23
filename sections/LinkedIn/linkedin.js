// import { useState, useEffect } from 'react';
// import Image from "next/image";
// import profilePic from "../public/images/AngieR_profile_min_2.png";
import styles from "../../styles/Home.module.scss";

export default function LinkedIn() {
  return (
    <div className={`${styles.sectionFlex} ${styles.portfolio} ${styles.pageMargin}`} id="linkedin">
      <div>
        <h2 className={styles.headingOne}>My Latest LinkedIn Posts</h2>
        <div className={`${styles.sectionFlex} ${styles.githubFlexContainer}`}>
        </div>
      </div>
    </div>
  );
}