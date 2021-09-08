import styles from "./review-slider.module.css";
import Review from "./review";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

const ReviewSlider = ({ reviews, headingLevel, className }) => {
  const [currSlide, setCurrSlide] = useState(0);
  const [ref, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrSlide(s.details().relativeSlide);
    },
  });

  return (
    <div ref={ref} className={`${styles.container} ${className}`}>
      <div className="keen-slider">
        {reviews.map((review, i) => (
          <Review
            key={i}
            {...review}
            headingLevel={headingLevel}
            className="keen-slider__slide"
          />
        ))}
      </div>
      {slider && (
        <div className={styles.navigation}>
          <button
            className={styles.navigationButton}
            onClick={(e) => e.stopPropagation() || slider.prev()}
            disabled={currSlide === 0}
          >
            ⟵
          </button>
          <button
            className={styles.navigationButton}
            onClick={(e) => e.stopPropagation() || slider.next()}
            disabled={currSlide === slider.details().size - 1}
          >
            ⟶
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewSlider;
