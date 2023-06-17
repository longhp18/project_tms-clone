import "./CreateRequest.css";
import MyButton from "@/components/utilities/MyButton/MyButton";
import Link from "next/link";

import BreadcrumbComponent from "@/components/Layout/Breadcumb/Breadcrumb";
import {
   Col,
   DatePicker,
   Divider,
   Form,
   Input,
   Row,
   Select,
   Space,
   Spin,
   TimePicker,
} from "antd";
import { axiosInstance, fetchRequestType } from "@/api/axios";
import { useEffect, useState } from "react";
const { TextArea } = Input;

const CreateRequest = () => {
   const dateFormat = "DD-MM-YYYY";
   const [loading, setLoading] = useState(false);
   const [requestTypeData, setRequestTypeData] = useState([]);
   const [requestReasonData, setRequestReasonData] = useState([]);
   const [partialDayData, setPartialDayData] = useState([]);

   const [requestTypeId, setRequestTypeId] = useState([]);

   const onFinish = (values) => {
      console.log("submit rôi", values);
   };

   useEffect(() => {
      fetchRequestType();
      fetchPartialDayData();
   }, []);

   const fetchRequestType = async () => {
      const requestTypeData = await axiosInstance.get(`v1/request-types`);
      await setRequestTypeData(requestTypeData?.data?.data);
   };

   const fetchRequestReason = async (requestTypeId) => {
      const requestReasonData = await axiosInstance.get(
         `v1/request-types/${requestTypeId}/request-reasons`
      );
      setRequestReasonData(requestReasonData?.data?.data);
   };

   const fetchPartialDayData = async () => {
      const partialDayData = await axiosInstance.get(`v1/partial-days`);
      setPartialDayData(partialDayData?.data?.data);
   };

   const title = [
      {
         title: <Link href={"/"}>Home</Link>,
      },
      {
         title: <a>Leave Request</a>,
      },
      {
         title: "Create Request",
      },
   ];

   const breadcrumbButtons = (
      <>
         <MyButton
            className="btn btn-default btn-primary rounded-8  mr-10"
            label="Submit"
            form={"create-request"}
            type="submit"
            onClick={onFinish}
         />

         <MyButton
            className="btn btn-default btn-third rounded-8"
            label="Cancel"
         />
      </>
   );

   const getPopupContainer = (triggerNode) => {
      return triggerNode.parentNode;
   };

   const createRequestFrom = (
      <div className="create-request">
         <div className="create-request-heading">Time Leave Request</div>
         <Form name="create-request" onFinish={onFinish}>
            <Row gutter={[60, 16]}>
               <Col span={12}>
                  <Row>
                     <Col span={5}>Request Type</Col>
                     <Col span={14}>
                        <Form.Item
                           className="requestType"
                           name="requestType"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your Request Type!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <Select
                              onChange={(id) => {
                                 setRequestTypeId(id);
                                 fetchRequestReason(id);
                              }}
                              placeholder="Select Request Type"
                              getPopupContainer={getPopupContainer}
                              bordered={false}
                              className="form-input"
                           >
                              {requestTypeData?.map(({ id, name }) => (
                                 <Option key={id} value={id}>
                                    {name}
                                 </Option>
                              ))}
                           </Select>
                        </Form.Item>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row gutter={[60, 16]}>
               <Col span={12}>
                  <Row>
                     <Col span={5}>Start Date</Col>
                     <Col span={14}>
                        <Form.Item
                           className="startDate"
                           name="startDate"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your Start Date!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <DatePicker
                              format={dateFormat}
                              style={{ width: "100%" }}
                              placeholder="Select Start Date"
                              getPopupContainer={getPopupContainer}
                              bordered={false}
                              className="form-input"
                           />
                        </Form.Item>
                     </Col>
                  </Row>
               </Col>
               <Col span={12}>
                  <Row>
                     <Col span={5}>End Date</Col>
                     <Col span={14}>
                        <Form.Item
                           className="endDate"
                           name="endDate"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your End Date!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <DatePicker
                              format={dateFormat}
                              style={{ width: "100%" }}
                              placeholder="Select End Date"
                              getPopupContainer={getPopupContainer}
                              bordered={false}
                              className="form-input"
                           />
                        </Form.Item>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row gutter={[60, 16]}>
               <Col span={12}>
                  <Row>
                     <Col span={5}>Partial Day</Col>
                     <Col span={14}>
                        <Form.Item
                           className="partialDay"
                           name="partialDay"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your Partial Day!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <Select
                              style={{ width: "60%" }}
                              placeholder="Select Partial Day"
                              getPopupContainer={getPopupContainer}
                              bordered={false}
                              className="form-input"
                           >
                              {partialDayData?.map(({ id, name }) => (
                                 <Option key={id} value={id}>
                                    {name}
                                 </Option>
                              ))}
                           </Select>
                        </Form.Item>
                     </Col>
                  </Row>
               </Col>
               <Col span={12}>
                  <Row>
                     <Col span={5}>Duration</Col>
                     <Col span={14}>10 days</Col>
                  </Row>
               </Col>
            </Row>
            <Row gutter={[60, 16]}>
               <Col span={12}>
                  <Row>
                     <Col span={5}>Reason</Col>
                     <Col span={14}>
                        <Form.Item
                           className="reason"
                           name="reason"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your Reason!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <Select
                              placeholder="Select Reason"
                              getPopupContainer={getPopupContainer}
                              bordered={false}
                              className="form-input"
                           >
                              {requestReasonData?.map(({ id, name }) => (
                                 <Option key={id} value={id}>
                                    {name}
                                 </Option>
                              ))}
                           </Select>
                        </Form.Item>
                     </Col>
                  </Row>
               </Col>
               <Col span={12}>
                  <Row>
                     <Col span={5}>Inform To</Col>
                     <Col span={14}>
                        <Form.Item
                           className="informTo"
                           name="informTo"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your Inform To!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <Select
                              placeholder="Select Inform To"
                              getPopupContainer={getPopupContainer}
                              bordered={false}
                              className="form-input"
                           ></Select>
                        </Form.Item>
                     </Col>
                  </Row>
               </Col>
            </Row>
            <Row gutter={[60, 16]}>
               <Col span={12}>
                  <Row>
                     <Col span={5}>Detail Reason</Col>
                     <Col span={14}>
                        <Form.Item
                           className="detailReason"
                           name="detailReason"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your Detail Reason!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <TextArea
                              autoSize={{
                                 minRows: 4,
                                 maxRows: 4,
                              }}
                              bordered={false}
                              className="form-input"
                           />
                        </Form.Item>
                     </Col>
                  </Row>
               </Col>
               <Col span={12}>
                  <Row>
                     <Col span={5}>Expected Approve</Col>
                     <Col span={14}>
                        <Form.Item
                           className="expectedApprove"
                           name="expectedApprove"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your Expected Approve!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <DatePicker
                              format={dateFormat}
                              style={{ width: "100%" }}
                              placeholder="Select Start Date"
                              getPopupContainer={getPopupContainer}
                              bordered={false}
                              className="form-input"
                           />
                        </Form.Item>
                     </Col>
                  </Row>
                  <Row>
                     <Col span={5}>Time</Col>
                     <Col span={14}>
                        <Form.Item
                           className="time"
                           name="time"
                           rules={[
                              {
                                 required: true,
                                 message: (
                                    <i className="form-required">
                                       Please input your Time!
                                    </i>
                                 ),
                              },
                           ]}
                        >
                           <TimePicker
                              style={{ width: "50%" }}
                              format={"HH:mm"}
                              bordered={false}
                              className="form-input"
                           />
                        </Form.Item>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Form>
      </div>
   );

   const createRequestFromLoading = <Spin>{createRequestFrom}</Spin>;

   return (
      <>
         <BreadcrumbComponent titles={title} buttons={breadcrumbButtons} />
         {loading ? createRequestFromLoading : createRequestFrom}
      </>
   );
};

export default CreateRequest;
