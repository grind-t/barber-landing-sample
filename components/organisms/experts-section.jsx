import styles from "./experts-section.module.css";
import Image from "next/image";

const ExpertsSection = () => (
  <section className={styles.container}>
    <h2 className={styles.heading}>Наши мастера</h2>
    <p className={styles.paragraph}>
      Уверенность - ключ к жизни. Не надо бояться быть собой! Я очень отличаюсь
      от многих людей моего возраста своим стилем и для меня это нормально. А
      если для вас это нормально, то для остальных будет тоже.
    </p>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <figure className={styles.figure}>
          <div className={styles.image}>
            <Image
              src="/images/master1.jpeg"
              alt="фото мастера"
              width="325"
              height="425"
            />
          </div>
          <figcaption className={styles.figCaption}>Monkey D. luffy</figcaption>
        </figure>
      </li>
      <li className={styles.listItem}>
        <figure className={styles.figure}>
          <div className={styles.image}>
            <Image
              src="/images/master2.jpeg"
              alt="фото мастера"
              width="325"
              height="425"
            />
          </div>
          <figcaption className={styles.figCaption}>Ichigo kurosaki</figcaption>
        </figure>
      </li>
      <li className={styles.listItem}>
        <figure className={styles.figure}>
          <div className={styles.image}>
            <Image
              src="/images/master3.jpeg"
              alt="фото мастера"
              width="325"
              height="425"
            />
          </div>
          <figcaption className={styles.figCaption}>Kieran Dely</figcaption>
        </figure>
      </li>
    </ul>
  </section>
);

export default ExpertsSection;
