import style from "./footer.module.css";
import FooterNav from "./FooterNav";
import { FaFacebook, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";

const footerLink = [
  {
    id: 1,
    title: "ticknow",
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
    id: 3,
    title: "hổ trợ",
    children: [
      {
        url: "/#",
        name: "Góp ý",
      },
      {
        url: "/#",
        name: "Rạp chiếu",
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
              <img src="/logo.png" alt="" />
            </div>
            <p className="slogan">Đặt vé dễ dàng, tận hưởng trọn vẹn</p>
            <div className={style["socials"]}>
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTiktok />
              </a>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
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
            &copy; 2025 TickNOw: All rights reserved
          </div>
          <div>
            <img
              src="https://api-website.cinestar.com.vn/media/wysiwyg/bocongthuong/dathongbao.webp"
              alt=""
              width={150}
            />
          </div>
          <p>
            <span>NHÓM:</span> TICKNOW
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
