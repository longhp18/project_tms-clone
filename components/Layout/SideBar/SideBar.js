import { useState } from "react";

import {
   BsCalendar3,
   BsCalendar2Plus,
   BsCardChecklist,
   BsClock,
} from "react-icons/bs";
import { Menu } from "antd";

import "./SideBar.css";
import { useRouter } from "next/router";

const SideBar = () => {
   const router = useRouter();

   const [collapsed, setCollapsed] = useState(true);
   const toggleCollapsed = () => {
      setCollapsed(!collapsed);
   };
   const getItem = (label, key, icon, children, type) => {
      return {
         key,
         children,
         icon,
         label,
         type,
      };
   };
   const items = [
      getItem("Working Time", "workingtime", <BsCalendar3 />, [
         getItem(
            "Leave Request",
            "/leave-request",
            <BsCalendar2Plus />,
            [
               getItem("My Request", "/", <BsCardChecklist />),
               getItem(
                  "Create Request",
                  "/create-request",
                  <BsCalendar2Plus />
               ),
            ],
            "group"
         ),
      ]),
      getItem("Overtime", "overtime", <BsClock />, [
         getItem(
            "Overtime Manage",
            "/overtime-manage",
            <BsCalendar2Plus />,
            [
               getItem("Over Report", "/over-report", <BsCardChecklist />),
               getItem("Create Over", "/create-over", <BsCalendar2Plus />),
            ],
            "group"
         ),
      ]),
   ];

   const handleGetKey = (e) => {
      router.push(e.key);
   };

   return (
      <>
         <div className="sidebar">
            <Menu
               onMouseEnter={toggleCollapsed}
               onMouseLeave={toggleCollapsed}
               getPopupContainer={() => document.querySelector(".sidebar")}
               selectedKeys={router.pathname}
               defaultSelectedKeys={["/"]}
               defaultOpenKeys={["/"]}
               mode="inline"
               inlineCollapsed={collapsed}
               items={items}
               onClick={handleGetKey}
            />
         </div>
      </>
   );
};

export default SideBar;
