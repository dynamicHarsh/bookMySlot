import React from 'react'

import { Layout, Space, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
const { Header} = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 40,
  paddingInline: 50,
  padding: 10,
  lineHeight: "64px",
  // backgroundColor: "#FFF0F5",
  // border: "2px solid #7dbcea",
  backgroundImage: "linear-gradient(#FFF0F5,white )",
};
const Nav = () => {
  return (
    <>
         <Header style={headerStyle} className="headerStyle">
            <Row>
              <Col flex="1" className="column logo"></Col>
              <Col flex="2" className="column navigation">
                <Col flex="1">
                  <Button
                    style={{
                      background: "#FFF0F5",
                      fontWeight: "bolder",
                      color: "darkorchid",
                      border: "transparent",
                      backgroundImage: "linear-gradient(#FFF0F5,white )",
                    }}
                    className="antBtn"
                  >
                    <Link to='/'>Home</Link>
                  </Button>
                </Col>
                <Col flex="1">
                  <Button
                    style={{
                      background: "#FFF0F5",
                      fontWeight: "bolder",
                      color: "darkorchid",
                      border: "transparent",
                      backgroundImage: "linear-gradient(#FFF0F5,white )",
                    }}
                    className="antBtn"
                  >
                    <Link to='/about'>About</Link>
                  </Button>
                </Col>
                <Col flex="1">
                  <Button
                    style={{
                      background: "#FFF0F5",
                      fontWeight: "bolder",
                      color: "darkorchid",
                      border: "transparent",
                      backgroundImage: "linear-gradient(#FFF0F5,white )",
                    }}
                    className="antBtn"
                  >
                    Consultants
                  </Button>
                </Col>
                <Col flex="1">
                  <Button
                    style={{
                      background: "#FFF0F5",
                      fontWeight: "bolder",
                      color: "darkorchid",
                      border: "transparent",
                      backgroundImage: "linear-gradient(#FFF0F5,white )",
                    }}
                    className="antBtn"
                  >
                  Contact                    
                  </Button>
                </Col>
              </Col>
              <Col flex="1" className="column button">
                <Button
                  style={{
                    margin: 5,
                    position: "relative",
                    top: "1.2em",
                    left: "1.3em",
                  }}
                >
                  {" "}
                  Call:9743xxxxxx
                </Button>
                <Button
                  type="primary"
                  style={{
                    margin: 5,
                    position: "relative",
                    top: "1.2em",
                    left: "10%",
                  }}
                >
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login/Register
                  </Link>
                </Button>
              </Col>
            </Row>
          </Header>
    </>
  )
}

export default Nav