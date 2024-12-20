import styles from "./Footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.fadingLine}></div>
      <ul className={styles.footer__list}>
        <li>
          <a href="#about">à propos</a>
        </li>
        <li>
          <a href="#works">réalisations</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      
      <div className={styles.fadingLine}></div>

      <div className={styles.footerBottom}>
        <p className={styles.footerBottom__date}>© 2024 Diallo Abdoulaye</p>
        <div className={styles.footerBottom__socialIcons}>

          <a
            href="https://www.linkedin.com/in/abdoulaye-kabele-diallo-a3005b298/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.footerBottom__icon} />
          </a>
        </div>
        <div className={styles.footerBottom__emptyLayout}></div>
      </div>
    </div>
  );
}

export default Footer;
