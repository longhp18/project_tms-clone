import { DatePicker, Select } from "antd";
import "./Filter.css";
import MyButton from "../../utilities/MyButton/MyButton";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/api/axios";

const Filter = () => {
   const [requestTypeData, setRequestTypeData] = useState([]);
   const [statusData, setStatusData] = useState([]);

   useEffect(() => {
      fetchRequestType();
      fetchStatus();
   }, []);

   const fetchRequestType = async () => {
      const requestTypeData = await axiosInstance.get(`v1/request-types`);
      setRequestTypeData(requestTypeData?.data?.data);
   };

   const fetchStatus = async () => {
      const statusData = await axiosInstance.get(`v1/status`);
      setStatusData(statusData?.data?.data);
   };

   const getPopupContainer = (triggerNode) => {
      return triggerNode.parentNode;
   };

   return (
      <>
         <div className="filter">
            <div className="filter-top">
               <div className="filter-group filter-startdate">
                  <div className="filter-group-title">Select start date</div>
                  <DatePicker
                     label="Select start date"
                     size="middle"
                     placeholder="Select start date"
                     bordered={false}
                     className="filter-input"
                     getPopupContainer={getPopupContainer}
                  />
               </div>
               <div className="filter-group filter-enddate">
                  <div className="filter-group-title">Select end date</div>
                  <DatePicker
                     size="middle"
                     placeholder="Select end date"
                     bordered={false}
                     className="filter-input"
                     getPopupContainer={getPopupContainer}
                  />
               </div>
               <div className="filter-group filter-requesttype">
                  <div className="filter-group-title">Select request type</div>
                  <Select
                     placeholder="Select request type"
                     bordered={false}
                     className="filter-input"
                     getPopupContainer={getPopupContainer}
                     mode="multiple"
                     allowClear
                     showSearch={false}
                     maxTagCount="responsive"
                  >
                     {requestTypeData?.map(({ id, name }) => (
                        <Option key={id} value={id}>
                           {name}
                        </Option>
                     ))}
                  </Select>
               </div>
               <div className="filter-group filter-requeststatus">
                  <div className="filter-group-title">
                     Select request status
                  </div>
                  <Select
                     placeholder="Select request status"
                     bordered={false}
                     className="filter-input"
                     getPopupContainer={getPopupContainer}
                     mode="multiple"
                     allowClear
                     showSearch={false}
                     maxTagCount="responsive"
                  >
                     {statusData?.map(({ id, name }) => (
                        <Option key={id} value={id}>
                           {name}
                        </Option>
                     ))}{" "}
                  </Select>
               </div>
            </div>
            <div className="filter-bottom mt-16">
               <MyButton
                  className="btn btn-default btn-primary rounded-8 mr-10"
                  label="Filter"
               />
               <MyButton
                  className="btn btn-default btn-third rounded-8"
                  label="Reset"
               />
            </div>
         </div>
      </>
   );
};

export default Filter;
