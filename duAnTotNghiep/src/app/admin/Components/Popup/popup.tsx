"use client";

import { useState, FormEvent, MouseEvent } from "react"; // THÊM MouseEvent
import styles from "./popup.module.css";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function Popup({ isOpen, onClose }: PopupProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      fullName: (e.target as any).fullName.value,
      email: (e.target as any).email.value,
      phone: (e.target as any).phone.value,
      role: (e.target as any).role.value,
      permission: (e.target as any).permission.value,
      status: (e.target as any).status.value,
    };
    onClose();
  };

  // THÊM: Xử lý nhấp ra ngoài
  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    // Chỉ đóng nếu nhấp đúng vào .popup (không phải .popupContent hoặc con của nó)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    // THÊM: Thêm onClick vào div.popup
    <div className={styles.popup} onClick={handleOutsideClick}>
      <div className={styles.popupContent}>
        <h2>Thêm Người Dùng Mới</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Họ Tên</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Số Điện Thoại</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="role">Quyền</label>
            <select id="role" name="role" required>
              <option value="">Chọn quyền</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="permission">Phân Quyền</label>
            <select id="permission" name="permission" required>
              <option value="">Chọn phân quyền</option>
              <option value="super">Super</option>
              <option value="standard">Standard</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="status">Trạng Thái</label>
            <select id="status" name="status" required>
              <option value="">Chọn trạng thái</option>
              <option value="active">Kích Hoạt</option>
              <option value="inactive">Chưa Kích Hoạt</option>
              <option value="banned">Banned</option>
            </select>
          </div>
          <div className={styles.formButtons}>
            <button type="submit" className={styles.submitBtn}>
              Thêm
            </button>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;