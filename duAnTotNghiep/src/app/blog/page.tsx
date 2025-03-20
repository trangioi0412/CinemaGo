import React from "react";
import style from "./blog.module.css";
import BlogItem from "../Components/Blog/Blog";
const Blog = () => {
  return (
    <div className={`container ${style.blog}`}>
      <h1>Tin tức</h1>
      <div className={style["blog-container"]}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

export default Blog;
