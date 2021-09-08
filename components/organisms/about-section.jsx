import styles from "./about-section.module.css";
import Image from "next/image";

const AboutSection = () => (
  <section className={styles.container}>
    <div className={styles.leftDecoration}>
      <div className={styles.leftDecorationImage1}>
        <Image src="/images/model1.jpeg" alt="" width="422" height="422" />
      </div>
      <div className={styles.leftDecorationImage2}>
        <Image src="/images/shaving.jpeg" alt="" width="340" height="256" />
      </div>
      <div className={styles.leftDecorationImage3}>
        <Image src="/images/model2.jpeg" alt="" width="325" height="325" />
      </div>
    </div>
    <div className={styles.contentContainer}>
      <h2 className={styles.heading}>О нас</h2>
      <p className={styles.paragraph}>
        Уверенность - ключ к жизни. Не надо бояться быть собой! Я очень
        отличаюсь от многих людей моего возраста своим стилем и для меня это
        нормально. А если для вас это нормально, то для остальных будет тоже.
      </p>
      <button type="button" className={styles.bookingButton}>
        Записаться сейчас!
      </button>
    </div>
    <div className={styles.rightDecoration}>
      <Image src="/images/model3.jpeg" alt="" width="262" height="349" />
    </div>
  </section>
);

export default AboutSection;
