import classes from "./Carousel.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlideHandler = () => {
    setSlide(slide === data.slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlideHandler = () => {
    setSlide(slide === 0 ? data.slides.length - 1 : slide - 1);
  };

  console.log("slide:", slide);
  console.log("data:", data);

  const arrow__right__class = `${classes.arrow} ${classes.arrow__right}`;
  const arrow__left__class = `${classes.arrow} ${classes.arrow__left}`;
  return (
    <div className={classes.carousel}>
      <BsArrowLeftCircleFill
        className={arrow__right__class}
        onClick={prevSlideHandler}
      />
      {data.slides.map((item, index) => {
        return (
          <img
            className={
              slide === index
                ? classes.slide
                : `${classes.slide} ${classes.slide__hidden}`
            }
            src={item.src}
            alt={item.alt}
            key={index}
          />
        );
      })}
      <BsArrowRightCircleFill
        className={arrow__left__class}
        onClick={nextSlideHandler}
      />
      <span className={classes.indicators}>
        {data.slides.map((_, index) => {
          return (
            <button
              onClick={() => setSlide(index)}
              className={
                slide === index
                  ? classes.indicator
                  : `${classes.indicator} ${classes.inactive}`
              }
              key={index}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
