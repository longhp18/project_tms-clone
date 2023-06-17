import NotFound from "@/pages/404";
import BreadcrumbComponent from "./Breadcumb/Breadcrumb";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
   const router = useRouter();
   console.log(router);
   const rootLayout = (
      <div className="root-layout">
         <div className="container-top">
            <Header />
         </div>
         <div className="container-content">
            <div className="container-left">
               <SideBar />
            </div>
            <div className="container-right">{children}</div>
         </div>
      </div>
   );

   return rootLayout;
};
export default Layout;
