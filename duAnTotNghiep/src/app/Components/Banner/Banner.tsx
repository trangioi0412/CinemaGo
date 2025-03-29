"use client";
import { useState, useEffect } from "react";
import styles from "../../page.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import BannerItem from "./BannerItem/BannerItem";
import { getAllMovies, getMovie } from "@/app/service/movie.service";
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.arrowRight} onClick={onClick}>
      <span>
        <FaChevronRight />
      </span>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div className={styles.arrowLeft} onClick={onClick}>
      <span>
        <FaChevronLeft />
      </span>
    </div>
  );
}

function Banner() {
  let settings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // console.log(res);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllMovies();
      setData(res);
    };
    fetchData();
  }, []);
  const respone = !data ? <p>Loading...</p> : data;
  console.log(data);

  return (
    <Slider {...settings} className={styles.banners}>
      {data.map((m) => (
        <BannerItem movie={m} />
      ))}
    </Slider>
  );
}

export default Banner;
