import { Layout, Space, Row, Col, Button } from "antd";
import React from "react";
import "../styles/HomePage.css";
import { Typography } from "antd";
import { TypeAnimation } from "react-type-animation";

import Nav from "../components/Nav";

// images
import doctor from "../images/dmain1.png";
import neurology from "../images/neurology.webp";
import generalphysician from "../images/generalphysician.png";
import orthopaedics from "../images/orthopaedics.webp";
import cardiology from "../images/cardiology.webp";
import { Link } from "react-router-dom";
import gynecologist from "../images/gynecologist.webp";

import Chatbot from "../components/Chatbot";

import { useState } from "react";
import { Card } from "antd";
import "../styles/homeStyles.css";
import img from "../images/Navicon.png"
const { Meta } = Card;
const { Footer, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: "90vh",
  lineHeight: "120px",
  color: "#fff",
  // backgroundImage: "linear-gradient(#FFF0F5,white )",
};
const footerStyle = {
  textAlign: "center",
  color: "#000000",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: " #FFF0F5",
  backgroundImage: "linear-gradient(#facbda,white )",
};

const HomePage = () => {
  const [openChatbot, setOpenChatbot] = useState(false);

  const generateChat = () => {
    setOpenChatbot(true);
  }
  return (
    <>
    <div >
      <Chatbot/>
    </div>
      <Nav />
      <Space
        direction="vertical"
        style={{ position: "relative", top: "4rem", width: "100%" }}
        size={[0, 48]}
        className="space"
      >
        <Content style={contentStyle} className="headerStyle">
          <Row>
            <Col flex="1" className="contentt tagline">
              <Typography className="tagline firstLine">
                Your
                <span style={{ color: "#710193" }}>
                  <TypeAnimation
                    sequence={["Health", 5000, "Time", 5000]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
              </Typography>

              <Typography className="tagline secondLine">
                Book with
                <span style={{ color: "#710193" }}>
                  <TypeAnimation
                    sequence={[
                      "Ease",
                      1500,
                      "Convenience",
                      1500,
                      "Choice",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                  />
                </span>
              </Typography>

              <Button
                type="primary"
                style={{
                  width: "30%",
                  height: "15%",
                  padding: "2% 2% 2% 2%",
                  margin: "5%",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  fontSize: "x-large",
                }}
              >
                <Link
                  to="/login"
                  style={{ textDecoration: "none", fontSize: "xx-large" }}
                >
                  {/* <i class="fa-solid fa-stethoscope">    Book Now</i> */}
                  Book Now
                </Link>
              </Button>
            </Col>

            <Col flex="1" className="contentt image">
              <img
                src={doctor}
                alt="error"
                style={{ width: 632.25, height: 450, filter: 100, padding: 10 }}
                className="doctorImage"
              />
            </Col>
          </Row>
          <div>
      <Chatbot />
    
           
              
      
          </div>

        </Content>

        <div className="info">
          <div className="info-heading">
            <h3>Consult Top Doctors By Speciality For Any Health Concern</h3>
            <h7>Instant Online Appointment Booking With Top Apollo Doctors</h7>
          </div>

          <div className="departments">
            <Card
              className="card"
              hoverable
              cover={
                <img className="cardImage" alt="neurology" src={neurology} />
              }
            >
              <Meta
                title="Neurology"
                description={
                  <ul>
                    <li>Brain Tumours</li>
                    <li>Cerebral Aneurysm</li>
                    <li>Epilepsy And Seizures</li>
                    <li>Parkinsion's Disease</li>
                  </ul>
                }
              />
            </Card>

            <Card
              className="card"
              hoverable
              cover={
                <img
                  className="cardImage"
                  alt="generalphysician"
                  src={generalphysician}
                />
              }
            >
              <Meta
                title="General Physician"
                description={
                  <ul>
                    <li>Alergies</li>
                    <li>Fever</li>
                    <li>Headache</li>
                    <li>Stomach pain</li>
                  </ul>
                }
              />
            </Card>

            <Card
              className="card"
              hoverable
              cover={
                <img
                  className="cardImage"
                  alt="generalphysician"
                  src={orthopaedics}
                />
              }
            >
              <Meta
                title="Orthopaedics"
                description={
                  <ul>
                    <li>Arthritis</li>
                    <li>Osteoarthritis</li>
                    <li>Knee pain</li>
                    <li>Joint pain</li>
                  </ul>
                }
              />
            </Card>

            <Card
              className="card"
              hoverable
              cover={
                <img className="cardImage" alt="cardiology" src={cardiology} />
              }
            >
              <Meta
                title="Cardiology"
                description={
                  <ul>
                    <li>Heart Failure</li>
                    <li>Cholesterol</li>
                    <li>Blood Pressure</li>
                    <li>Stroke</li>
                  </ul>
                }
              />
            </Card>

            <Card
              className="card"
              hoverable
              cover={
                <img
                  className="cardImage"
                  alt="gynecologist"
                  src={gynecologist}
                />
              }
            >
              <Meta
                title="Gynecology"
                description={
                  <ul>
                    <li>Menopause</li>
                    <li>Uterine Prolapse</li>
                    <li>Endometrial Cancers</li>
                    <li>Cervical Cancer</li>
                  </ul>
                }
              />
            </Card>
          </div>
        </div>
                   
        <Footer style={footerStyle}>
          <Row gutter={16}>
            <Col flex="1em" className="column logo">
              <img style={{ position: "relative", height: "4.5em", padding: "0.5em 0.5em" }} src={img} alt="" />
            </Col>

            <Col className="gutter-row" span={5.33}></Col>
            <Col className="gutter-row" span={6}></Col>
          </Row>
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div style={{ marginBottom: "5%", lineHeight: "250%" }}>
                <Row>About Us</Row>
                <Row>Annual CheckUp</Row>
                <Row>Blog</Row>

              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div style={{ lineHeight: "250%" }}>
                <Row>Get a Diagnosis</Row>
                <Row>How it Works</Row>
                <Row>Privacy Policy</Row>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div style={{ lineHeight: "250%" }}>
                <Row>Hospitals in India</Row>
                <Row>International Patients</Row>
                <Row>Medical Procedures</Row>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div style={{ lineHeight: "250%" }}>
                <Row>Contact Us</Row>
                <Row>FAQ's</Row>
                <Row>Careers</Row>
              </div>
            </Col>

            <Col className="gutter-row" span={6}>
              <div></div>
            </Col>
          </Row>
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="Row">All rights Reserved © Emmet 2023</div>
        </Footer>
      </Space>

    </>
  );
};

export default HomePage;
