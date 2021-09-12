import styles from "./hero-header.module.css";
import Image from "next/image";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={styles.container}>
      <ul className={styles.socialLinks}>
        <li>
          <Link href="#">
            <a>
              <FontAwesomeIcon icon={faFacebookF} />
              <span className="visually-hidden">Facebook</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <FontAwesomeIcon icon={faTwitter} />
              <span className="visually-hidden">Twitter</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <FontAwesomeIcon icon={faInstagram} />
              <span className="visually-hidden">Instagram</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <FontAwesomeIcon icon={faLinkedinIn} />
              <span className="visually-hidden">LinkedIn</span>
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Лого" width="107" height="95" />
      </div>
      <nav>
        <input
          id="burger-menu-toggle"
          type="checkbox"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
          className={styles.burgerMenuToggle}
        />
        <label htmlFor="burger-menu-toggle" className={styles.burgerMenuIcon}>
          <span className="visually-hidden">Меню</span>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </label>
        <ul className={styles.navList}>
          <li>
            <Link href="#about">
              <a onClick={handleLinkClick}>О нас</a>
            </Link>
          </li>
          <li>
            <Link href="#pricing">
              <a onClick={handleLinkClick}>Цены</a>
            </Link>
          </li>
          <li>
            <Link href="#experts">
              <a onClick={handleLinkClick}>Мастера</a>
            </Link>
          </li>
          <li>
            <Link href="#reviews">
              <a onClick={handleLinkClick}>Отзывы</a>
            </Link>
          </li>
        </ul>
      </nav>
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
    </header>
  );
};

export default HeroHeader;
