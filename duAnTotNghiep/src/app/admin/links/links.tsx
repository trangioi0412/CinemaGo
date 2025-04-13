import { TfiDashboard } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa6";
import { TbBrandCarbon } from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";
import { ReactNode } from "react";
export default interface linkInterface {
  id: number;
  title: string;
  url: string;
  icon: ReactNode;
}
const links: linkInterface[] = [
  {
    id: 1,
    title: "Thống kê",
    url: "/admin/adminGlobal/dashboard",
    icon: <TfiDashboard />,
  },
  {
    id: 2,
    title: "Người dùng",
    url: "/admin/adminGlobal/user",
    icon: <FaRegUser />,
  },
  {
    id: 3,
    title: "Thương hiệu",
    url: "/admin/adminGlobal/brand",
    icon: <TbBrandCarbon />,
  },
  {
    id: 4,
    title: "Hóa đơn",
    url: "/admin/adminGlobal/payments",
    icon: <FaRegMoneyBillAlt />,
  },
  {
    id: 5,
    title: "Khuyến mãi",
    url: "/admin/adminGlobal/vouchers",
    icon: <MdOutlineLocalOffer />,
  },
];
export { links };
