import "./TableRequest.css";
import { Table } from "antd";

const TableRequest = () => {
   const dataSource = [
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
      {
         key: "2",
         name: "John",
         age: 42,
         address: "10 Downing Street",
      },
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
      {
         key: "2",
         name: "John",
         age: 42,
         address: "10 Downing Street",
      },
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
      {
         key: "2",
         name: "John",
         age: 42,
         address: "10 Downing Street",
      },
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
      {
         key: "2",
         name: "John",
         age: 42,
         address: "10 Downing Street",
      },
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
      {
         key: "2",
         name: "John",
         age: 42,
         address: "10 Downing Street",
      },
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
      {
         key: "2",
         name: "John",
         age: 42,
         address: "10 Downing Street",
      },
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
      {
         key: "2",
         name: "John",
         age: 42,
         address: "10 Downing Street",
      },
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
      {
         key: "2",
         name: "John",
         age: 42,
         address: "10 Downing Street",
      },
      {
         key: "1",
         name: "Mike",
         age: 32,
         address: "10 Downing Street",
      },
   ];

   const columns = [
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
      },
      {
         title: "Age",
         dataIndex: "age",
         key: "age",
      },
      {
         title: "Address",
         dataIndex: "address",
         key: "address",
      },
   ];

   return (
      <>
         <div className="tablerequest mt-16">
            <Table
               dataSource={dataSource}
               columns={columns}
               getPopupContainer={() => document.querySelector(".tablerequest")}
            />
         </div>
      </>
   );
};

export default TableRequest;
