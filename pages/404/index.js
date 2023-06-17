import MyButton from "@/components/utilities/MyButton/MyButton";

import "./404.css";
import { useRouter } from "next/router";

const NotFound = () => {
   const router = useRouter();
   return (
      <>
         <div className="notfound-container">
            <div className="notfound-content">
               <div className="notfound-content-title">Opp...</div>
               <div className="notfound-content-description">
                  The page you visited does not exist..
               </div>
               <MyButton
                  onClick={() => router.push("/")}
                  className="btn btn-default btn-primary rounded-8 "
                  label="Go home"
               />
            </div>
         </div>
      </>
   );
};
export default NotFound;
