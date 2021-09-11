import styles from "./reviews-section.module.css";
import Image from "next/image";
import ReviewSlider from "../molecules/review-slider";

const ReviewsSection = () => {
  const review = {
    heading: "Мой лучший опыт",
    text: "Я всегда пытаюсь выйти за рамки и выбрать прическу, которую вы не увидите ни на ком другом. У меня действительно хорошие волосы, и я могу делать с ним много разных вещей.",
    author: {
      image: "review-author1.jpeg",
      name: "David Otunga",
      profession: "модель",
    },
  };

  return (
    <section className={styles.container}>
      <div className={styles.leftDecoration}>
        <Image
          src="happy-customer.jpeg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="left top"
        />
      </div>
      <div className={styles.overlay}>
        <ReviewSlider reviews={[review, review]} headingLevel="h2" />
      </div>
    </section>
  );
};

export default ReviewsSection;
