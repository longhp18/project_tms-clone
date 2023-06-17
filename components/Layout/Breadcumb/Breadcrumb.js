import { Breadcrumb, Col, Row } from "antd";
import "./Breadcrumb.css";

const BreadcrumbComponent = (props) => {
   return (
      <>
         <Row className="breadcumb">
            <Col className="breadcumb-left" span={12}>
               <Breadcrumb items={props.titles} />
            </Col>
            <Col className="breadcumb-right" span={12}>
               {props.buttons}
            </Col>
         </Row>
      </>
   );
};

export default BreadcrumbComponent;
