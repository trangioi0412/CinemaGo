"use client";
import styles from "./movieList.module.css";
import { Movies } from "@/app/movie.interface";
import MovieItem from "./MovieItem/MovieItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
function SampleNextArrow(props: any) {
  const { onClick, currentSlide, slideCount, slidesToShow } = props;
  return (
    <div
      className={styles.arrowRight}
      onClick={currentSlide === slideCount - 1 ? undefined : onClick}
      style={{
        opacity: currentSlide === slideCount - slidesToShow ? "0" : "1",
      }}
    >
      <span>
        <FaChevronRight />
      </span>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick, currentSlide } = props;
  return (
    <div
      className={styles.arrowLeft}
      style={{ opacity: currentSlide === 0 ? "0" : "1" }}
      onClick={currentSlide === 0 ? undefined : onClick}
    >
      <span>
        <FaChevronLeft />
      </span>
    </div>
  );
}
function Section({ title, data }: { title?: string; data: Movies[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  let slidesToShow = 5;
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 5,
    initialSlide: 0,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    nextArrow: (
      <SampleNextArrow
        currentSlide={currentSlide}
        slidesToShow={slidesToShow}
        slideCount={data.length}
      />
    ),
    prevArrow: <SamplePrevArrow currentSlide={currentSlide} />,
  };

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h1>
          <span></span> {title}
        </h1>
      </div>

      <Slider {...settings} className={styles.movies}>
        {data.map((m) => (
          <MovieItem movie={m} />
        ))}
      </Slider>
    </section>
  );
}

export default Section;
