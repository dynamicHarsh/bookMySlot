import React,{useState} from 'react'
import "../styles/Nav.css";
import img from "../images/Navicon.png"
import Ham from "../components/Ham.jsx"
import { Layout, Space, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
const { Header} = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor:"#FFFF",
  position:"fixed",
  zIndex:9000,
  width:"100%"
};

const RowStyle = {
  position:"relative",
  height: "100%",
}

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [menu_class, setMenuClass] = useState("menu-hidden")
  
  const ClickEvent = () =>{
    if(!isClicked) {
      setMenuClass("menu-visible")
    }
    else {
      setMenuClass("menu-hidden")
    }
    setIsClicked(!isClicked)
  }



  return (
    <>
         <Header style={headerStyle} className="headerStyle">
            <Row style={RowStyle} id="Rw">

              <Col flex="1em" className="column logo">
                <img style={{position:"relative",height:"4.5em",padding:"0.5em 0.5em"}} src={img} alt="" />
              </Col>

              
              <Col flex="3" id={menu_class} className='column navigation'> 
                
                <Col id="navi" className="column navigation">

                  <Col >
                      <Link className='ColLink' to='/'>Home</Link>
                  </Col>
                  <Col  >
                    <Link className='ColLink' to='/about'>About</Link>
                  </Col>
                  <Col  >
                    <Link className='ColLink' to='/'>Consultants</Link>
                  </Col>
                  <Col>
                    <Link className='ColLink' to='/'>Contact</Link>                 
                  </Col>

                </Col>


                <Col id="Log" className="column button">
                  <Col >
                    <Button
                      style={{
                        margin: 6,
                        position: "relative",
                        padding: '0 1em',
                        backgroundColor: 'red',
                        color: 'white',
                        border:'none',
                        fontFamily: "'Young Serif', serif",
                        fontFamily: "'Nunito', sans-serif",
                        fontFamily: "'Merriweather', serif",
                        fontFamily: "'Gabarito', cursive"
                      }}
                    >
                      {"  "}
                      Emergency
                    </Button>
                  </Col>
                  <Col >
                    <Button
                      type="primary"
                      style={{
                        margin: 5,
                        border:'none',
                        position: "relative",
                        fontFamily: "'Young Serif', serif",
                        fontFamily: "'Nunito', sans-serif",
                        fontFamily: "'Merriweather', serif",
                        fontFamily: "'Gabarito', cursive"
                      }}
                    >
                      <Link to="/login" style={{ textDecoration: "none" }}>
                        Login/Register
                      </Link>
                    </Button>
                  </Col>
                </Col>
              </Col>
              
              <Col id='Hamcont' style={{justifyContent:"flex-end"}} className='column logo' flex="1" onClick={ClickEvent}><Ham  /></Col>
              
            </Row>
          </Header>
    </>
  )
}

export default Nav