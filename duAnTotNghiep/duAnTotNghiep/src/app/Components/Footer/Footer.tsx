import style from "./footer.module.css";
import FooterNav from "./FooterNav";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";

const footerLink = [
  {
    id: 1,
    title: "gocinema",
    children: [
      {
        url: "/#",
        name: "Về chúng tôi",
      },
      {
        url: "/#",
        name: "Thỏa thuận sử dụng",
      },
      {
        url: "/#",
        name: "Chính sách bảo mật",
      },
      {
        url: "/#",
        name: "Quy  chế hoạt động",
      },
    ],
  },
  {
    id: 2,
    title: "góc điện ảnh",
    children: [
      {
        url: "/#",
        name: "Thể loại phim",
      },
      {
        url: "/#",
        name: "Bình luận phim",
      },
      {
        url: "/#",
        name: "Blog điện ảnh",
      },
      {
        url: "/#",
        name: "Phim hay tháng",
      },
    ],
  },
  {
    id: 3,
    title: "hổ trợ",
    children: [
      {
        url: "/#",
        name: "Góp ý",
      },
      {
        url: "/#",
        name: "Rạp/Giá vé",
      },
      {
        url: "/#",
        name: "Sale & Service",
      },
      {
        url: "/#",
        name: "Tuyển dụng",
      },
    ],
  },
];

function Footer() {
  return (
    <div className={style["footer_container"]}>
      <footer className={"container"}>
        <div className={style["footer-primary"]}>
          <div className={style["footer_logo"]}>
            <div className={style.logo}>
              <a href="/">LOGO</a>
            </div>
            <p className="slogan">Đặt vé dễ dàng, tận hưởng trọn vẹn</p>
            <div className={style["socials"]}>
              <span>
                <FaFacebook />
              </span>
              <span>
                <FaTiktok />
              </span>
              <span>
                <FaYoutube />
              </span>
              <span>
                <FaInstagram />
              </span>
            </div>
          </div>
          <div className={style["footer_nav"]}>
            {footerLink.map((link) => (
              <FooterNav
                key={link.id}
                title={link.title}
                link={link.children}
              />
            ))}
          </div>
        </div>
        <div className={style["footer-secondary"]}>
          <div className="copyright">
            &copy; 2025 GoCinema: All rights reserved
          </div>
          <div>
            <img
              src="https://api-website.cinestar.com.vn/media/wysiwyg/bocongthuong/dathongbao.webp"
              alt=""
              width={150}
            />
          </div>
          <p>
            <span>NHÓM:</span> GOCINEMA
          </p>
          <p>
            <span>ĐỊA CHỈ:</span> FPT POLYTECHNIC HỒ CHÍ MINH
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
