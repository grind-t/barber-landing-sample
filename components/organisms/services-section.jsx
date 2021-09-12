import styles from "./services-section.module.css";
import Link from "next/link";

const ServicesSection = () => (
  <section id="pricing" className={styles.container}>
    <h2 className={styles.heading}>Прейскурант</h2>
    <div className={styles.content}>
      <ul className={styles.services}>
        <li>
          <h3 className={styles.serviceHeading}>Мужская стрижка</h3>
          <strong className={styles.servicePrice}>600 Р</strong>
        </li>
        <li>
          <h3 className={styles.serviceHeading}>
            Стрижка машинкой одна насадка
          </h3>
          <strong className={styles.servicePrice}>300 Р</strong>
        </li>
        <li>
          <h3 className={styles.serviceHeading}>Моделирование бороды</h3>
          <strong className={styles.servicePrice}>500 Р</strong>
        </li>
        <li>
          <h3 className={styles.serviceHeading}>Стрижка + борода</h3>
          <strong className={styles.servicePrice}>1100 Р</strong>
        </li>
        <li>
          <h3 className={styles.serviceHeading}>Опасное бритье</h3>
          <strong className={styles.servicePrice}>600 Р</strong>
        </li>
        <li>
          <h3 className={styles.serviceHeading}>Детская стрижка</h3>
          <strong className={styles.servicePrice}>400 Р</strong>
        </li>
        <li>
          <h3 className={styles.serviceHeading}>Эпиляция воском</h3>
          <strong className={styles.servicePrice}>200 Р</strong>
        </li>
      </ul>
      <button className={styles.bookingButton}>Записаться сейчас!</button>
    </div>
  </section>
);

export default ServicesSection;
