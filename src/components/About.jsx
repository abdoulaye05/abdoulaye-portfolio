import styles from "./About.module.scss";
import { useState, useEffect } from 'react';
import image from "../assets/about_picture.webp"


const words = ['Collaboratif', 'Créatif', 'Développeur', 'Persévérant'];

function Title() {
  const [word, setWord] = useState(words[0]);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setWord(words[(words.indexOf(word) + 1) % words.length]);
        setFadeOut(false);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, [word]);

  return <h3 className={`${styles.title} ${fadeOut ? styles.title__fadeOut : ''}`}>{word}</h3>;
}

function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about__content}>
        <h5 className={styles.about__tag}>à propos</h5>
        <h3><Title /></h3>
        <p>
          Je suis Diallo Abdoulaye, développeur full stack junior, passionné par le développement d’applications et la création de sites web modernes, dynamiques et accessibles. Mon parcours en informatique et mes expériences variées, notamment au sein de mon entreprise Mobydev, m'ont permis de maîtriser de nombreuses technologies, telles que React, Vue.js, Node.js, MySQL, et bien d'autres. Avec un intérêt marqué pour l'innovation, j’allie compétences techniques et créativité pour concevoir des applications performantes et des solutions adaptées aux besoins spécifiques. Mon approche collaborative et ma capacité à apprendre rapidement font de moi une personne créatif sur des projets avec un  regards sur  des solutions adaptées.       </p>
      </div>
      <div className={styles.about__picture}>
        <img
          className={styles.about__image}
          src={image}
          alt="Myself, admiring the Dolomites in Italy"
        />
      </div>
    </div>
  );
}

export default About;
