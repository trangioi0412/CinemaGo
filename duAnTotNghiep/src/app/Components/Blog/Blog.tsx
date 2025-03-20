import style from "../../blog/blog.module.css";
function BlogItem() {
  return (
    <div className={style["blog-item"]}>
      <div className={style["blog-img"]}></div>
      <div>
        <div className={style["blog-title"]}>Lorem ipsum dolor</div>
        <p className={style["blog-paragrap"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo
          ipsa, aliquam tempore ipsum sit vitae at nostrum cum ipsam magnam
          accusantium quisquam suscipit architecto, molestias quasi adipisci
          distinctio repellat.
        </p>
      </div>
    </div>
  );
}

export default BlogItem;
