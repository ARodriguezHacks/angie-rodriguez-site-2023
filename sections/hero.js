import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
// import backgroundPic from "../public/images/background.jpg";
import profilePic from "../public/images/cropped.png";

export default function Hero() {
  return (
    <div className={`${styles.sectionFlex} ${styles.about} ${styles.pageMargin}`} id="about">
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutCopy}>
          <p>Welcome!</p>
          <h1 className={styles.headingOne}>
            <span>My name is</span> Angie Rodriguez
          </h1>
          <p className={styles.heroParagraph}>
            I&apos;m a software engineer based in the PNW. I love working in
            React.js, TypeScript and more.
          </p>
        </div>
        <div className={styles.aboutProfileImage}>
          <div style={{ boxShadow: "0px 0px 10px gray" }}>
            <Image
              src={profilePic}
              alt="Angie Rodriguez profile pic"
              width="500vw"
              height="500vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}