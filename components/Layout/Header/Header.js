import React from "react";

import { ImProfile, ImContrast, ImCog, ImExit } from "react-icons/im";

import { Dropdown } from "antd";
import "./Header.css";

const Header = () => {
   const image =
      "https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg";
   const imageNull =
      "https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_960_720.png";

   const items = [
      {
         icon: <ImProfile />,
         key: "profile",
         label: "Profile",
      },
      {
         icon: <ImCog />,
         key: "settings",
         label: "Settings and Privacy",
      },
      {
         icon: <ImContrast />,
         key: "darkmode",
         label: "Dark Mode",
      },
      { icon: <ImExit />, key: "logout", label: "Logout" },
   ];

   return (
      <>
         <div className="header">
            <div className="header-container">
               <div className="header-left">
                  <div className="header-left-brand">
                     <img
                        src="https://i.pinimg.com/originals/4a/49/3a/4a493a4a5636f5ec93b7c0913713ed94.png"
                        alt="Logo"
                     />
                     <div className="header-left-namebrand">Meta</div>
                  </div>
               </div>
               <div className="header-right">
                  <div className="header-right-username">Welcome, Long!</div>

                  <Dropdown
                     minWidth={400}
                     overlayClassName="hoangphilong"
                     getPopupContainer={() =>
                        document.querySelector(".header-right")
                     }
                     menu={{
                        items,
                     }}
                     placement="bottomRight"
                     arrow
                  >
                     <img
                        className="img-avatar"
                        src={image ? image : imageNull}
                     />
                  </Dropdown>
               </div>
            </div>
         </div>
      </>
   );
};

export default Header;
