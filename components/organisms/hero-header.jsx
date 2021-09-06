import styles from "./hero-header.module.css";
import Image from "next/image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const HeroHeader = () => (
  <header className={styles.container}>
    <div className={styles.topBar}>
      <div className={styles.socialLinks}>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <Image src="/logo.png" alt="Лого" width="107" height="95" />
      <button type="button" className={styles.burgerMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
    <div className={styles.contentContainer}>
      <h1 className={styles.heading}>
        Стиль - это отражение вашей позиции и вашей индивидуальности.
      </h1>
      <p className={styles.paragraph}>
        Уверенность - ключ к жизни. Не надо бояться быть собой! Я очень
        отличаюсь от многих людей моего возраста своим стилем и для меня это
        нормально. А если для вас это нормально, то для остальных будет тоже.
      </p>
      <button type="button" className={styles.bookingButton}>
        Записаться сейчас!
      </button>
    </div>
  </header>
);

export default HeroHeader;
