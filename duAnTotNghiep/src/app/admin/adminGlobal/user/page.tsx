import React from "react";
import style from "./user.module.css";
const User = () => {
  return (
    <div style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
      <div className={style["header"]}>
        <div className="search-bar">
          <input type="text" placeholder="Search ..." />
        </div>
        <div className="user-info">
          <div className="notifications">
            <i className="fa-solid fa-bell"></i>
            <span className="badge">3</span>
          </div>
          <div className="messages">
            <i className="fa-solid fa-message"></i>
            <span className="badge">3</span>
          </div>
          <div className="profile">
            <i className="fa-solid fa-user"></i>
            <span>HoangDuyet</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        <h2>DANH SÁCH NGƯỜI DÙNG</h2>
        <div className="actions">
          <button className="add-btn">+ Tạo Mới User</button>
          <div className="export-btns">
            <button>Copy</button>
            <button>CSV</button>
            <button>Excel</button>
            <button>PDF</button>
            <button>Print</button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="th">STT</th>
              <th className="th">Họ Tên</th>
              <th className="th">Ngày Tham Gia</th>
              <th className="th">Số Điện Thoại</th>
              <th className="th">Email</th>
              <th className="th">Địa Chỉ</th>
              <th className="th">Trạng Thái</th>
              <th className="th">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td">1</td>
              <td className="td">Hoàng Duyệt</td>
              <td className="td">24/06/2020</td>
              <td className="td">0946145204</td>
              <td className="td">hoangduyet@gmail.com</td>
              <td className="td">Quận 7, TP.HCM</td>
              <td className="td">
                <span className="status active">Hoạt Động</span>
              </td>
              <td className="actions">
                <button className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="edit">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="td">2</td>
              <td className="td">Nguyễn Thị Vân Hồng</td>
              <td className="td">14/02/2022</td>
              <td className="td">0923145204</td>
              <td className="td">hongnguyen@gmail.com</td>
              <td className="td">Quận 1, TP.HCM</td>
              <td className="td">
                <span className="status active">Hoạt Động</span>
              </td>
              <td className="actions">
                <button className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="edit">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td className="td">3</td>
              <td className="td">Trần Gia Bảo</td>
              <td className="td">03/03/2020</td>
              <td className="td">0853145204</td>
              <td className="td">baotran@gmail.com</td>
              <td className="td">Quận 3, TP.HCM</td>
              <td className="td">
                <span className="status active">Hoạt Động</span>
              </td>
              <td className="actions">
                <button className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="edit">
                  <i className="fa-solid fa-pen-to-square"></i>
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
              <td className="actions">
                <button className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="edit">
                  <i className="fa-solid fa-pen-to-square"></i>
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
              <td className="actions">
                <button className="delete">
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button className="edit">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pagination">
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
