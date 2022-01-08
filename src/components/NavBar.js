import React from "react";
import { Row, Col } from "antd";

const NavBar = () => {
  return (
    <div className="navCol">
      <Row id="navColItems">
        <Col span={10} className="logo">CAKE CLUB</Col>
        <Col span={1} offset={5} className="navIM">Cakes</Col> 
        <Col span={1} offset={1} className="navIM">Chocolates</Col>
        <Col span={1} offset={1} className="navIM">Courses</Col>
        <Col span={1} offset={1} className="navIM">Login</Col>
      </Row>
    </div>
  );
};

export default NavBar;
