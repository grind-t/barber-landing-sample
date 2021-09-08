import styles from "./review.module.css";
import Image from "next/image";

const Review = ({
  heading,
  headingLevel: Heading,
  text,
  author,
  className,
}) => (
  <div className={`${styles.container} ${className}`}>
    <Heading className={styles.heading}>{heading}</Heading>
    <figure className={styles.figure}>
      <blockquote className={styles.blockquote}>
        <p>{text}</p>
      </blockquote>
      <figcaption className={styles.author}>
        <div className={styles.authorImage}>
          <Image src={author.image} alt="фото автора" width="50" height="50" />
        </div>
        <span className={styles.authorName}>{author.name}</span>
        <span className={styles.authorProfession}> {author.profession}</span>
      </figcaption>
    </figure>
  </div>
);

export default Review;
