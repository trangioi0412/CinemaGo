import React from "react";
import style from "./user.module.css";
const User = () => {
  return (
    <div style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
      <div className={style.header}>
        <div className={style.user_info}>
          <div className={style.notifications}>
            <span className={style.badge}>3</span>
          </div>
          <div className={style.messages}>
            <span className={style.badge}>3</span>
          </div>
          <div>
            <span>HoangDuyet</span>
          </div>
        </div>
      </div>
      <div className={style.main_content}>
        <h2>DANH SÁCH NGƯỜI DÙNG</h2>
        <div className={style.search_bar}>
          <input type="text" placeholder="Search ..." />
        </div>
        <div className={style.actions}>
          <button className={style.add_btn}>+ Tạo Mới User</button>
          <div className={style.export_btns}>
            <button>Copy</button>
            <button>CSV</button>
            <button>Excel</button>
            <button>PDF</button>
            <button>Print</button>
          </div>
        </div>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.th}>STT</th>
              <th className={style.th}>Họ Tên</th>
              <th className={style.th}>Ngày Tham Gia</th>
              <th className={style.th}>Số Điện Thoại</th>
              <th className={style.th}>Email</th>
              <th className={style.th}>Địa Chỉ</th>
              <th className={style.th}>Trạng Thái</th>
              <th className={style.th}>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.td}>1</td>
              <td className={style.td}>Hoàng Duyệt</td>
              <td className={style.td}>24/06/2020</td>
              <td className={style.td}>0946145204</td>
              <td className={style.td}>hoangduyet@gmail.com</td>
              <td className={style.td}>Quận 7, TP.HCM</td>
              <td className={style.td}>
                <span className="status active">Hoạt Động</span>
              </td>
              <td className={style.actions}>
                <button className={style.edit}>
                  Sửa
                </button>
              </td>
            </tr>
            <tr>
              <td className={style.td}>2</td>
              <td className={style.td}>Nguyễn Thị Vân Hồng</td>
              <td className={style.td}>14/02/2022</td>
              <td className={style.td}>0923145204</td>
              <td className={style.td}>hongnguyen@gmail.com</td>
              <td className={style.td}>Quận 1, TP.HCM</td>
              <td className={style.td}>
                <span className="status active">Hoạt Động</span>
              </td>
              <td className={style.actions}>
                <button className={style.edit}>
                  Sửa
                </button>
              </td>
            </tr>
            <tr>
              <td className={style.td}>3</td>
              <td className={style.td}>Trần Gia Bảo</td>
              <td className={style.td}>03/03/2020</td>
              <td className={style.td}>0853145204</td>
              <td className={style.td}>baotran@gmail.com</td>
              <td className={style.td}>Quận 3, TP.HCM</td>
              <td className={style.td}>
                <span className="status active">Hoạt Động</span>
              </td>
              <td className={style.actions}>
                <button className={style.edit}>
                  Sửa
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Lê Anh Tuấn</td>
              <td>20/04/2020</td>
              <td>0853145204</td>
              <td>tuanle@gmail.com</td>
              <td>Quận 5, TP.HCM</td>
              <td>
                <span className="status active">Hoạt Động</span>
              </td>
              <td className={style.actions}>
                <button className={style.edit}>
                  Sửa
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Phạm Ngọc Linh</td>
              <td>05/05/2020</td>
              <td>0853145204</td>
              <td>linhpham@gmail.com</td>
              <td>Quận 9, TP.HCM</td>
              <td>
                <span className="status active">Hoạt Động</span>
              </td>
              <td className={style.actions}>
                <button className={style.edit}>
                  Sửa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={style.pagination}>
          <p>Hiện 1 đến 5 của 5 danh mục</p>
          <div>
            <button>Trước</button>
            <button>1</button>
            <button>Sau</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
