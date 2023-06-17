import TableRequest from "@/components/Layout/TableRequest/TableRequest";
import CreateRequest from "./create-request";
import "./index.css";
import "./style.css";
import Filter from "@/components/Layout/Filter/Filter";

const Home = () => {
   return (
      <>
         <Filter />
         <TableRequest />
      </>
   );
};

export default Home;
