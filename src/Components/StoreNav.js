import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Aldilogo from './aldi-logo.png'
import Costcologo from './costco-logo.png'
import Heblogo from './HEB-Logo.png'
import Krogerlogo from './kroger-logo.png'
import Samslogo from './Sams-Club-Logo.png'
import Sproutslogo from './sprouts-logo.png'
import Instahome from './insta-logo.png'
import Nav from 'react-bootstrap/Nav'
// import Container from 'react-bootstrap/Container'
import Error from './ErrorLogo.png'

import Aldi from './Aldi';
import Costco from './Costco';
import Heb from './Heb';
import Kroger from './Kroger';
import SamsClub from './SamsClub';
import Sprouts from './Sprouts';
import Home from './Home'
import ErrorComponent from './Error'

const StoreNav = () =>{
const InstaHome = Instahome
const AldiLogo = Aldilogo
const CostcoLogo = Costcologo
const HebLogo= Heblogo
const KrogerLogo= Krogerlogo
const SamsLogo= Samslogo
const SproutsLogo= Sproutslogo
const ErrorLogo= Error

    return(
        <div style={{margin:"auto"}}>
            <h2>Browse your favorite store in town!</h2>
            <Router>
                <Container style={{marginTop:"40px", textAlign:"center"}}>
                    <Nav>
                        <Nav.Item>
                            <Link>
                                <img src={InstaHome} alt="Instacart Logo Here" href="/"/>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                                <img src={AldiLogo} alt="Aldi Stores Logo" href="/aldi"/>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                                <img src={CostcoLogo} alt="Costco Wholesale Logo" href="/costco"/>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                                <img src={HebLogo} alt="HEB Logo" href="/heb"/>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                                <img src={KrogerLogo} alt="Kroger Logo" href="/kroger" />
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                            <img src={SamsLogo} alt="Sams Club Logo" href="/sams" />
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                            <img src={SproutsLogo} alt="Sprouts Market Logo" href="/sprouts" />
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link>
                            <img src={ErrorLogo} alt="Error" href="/*" />
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Container>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/aldi" element={<Aldi/>}/>
                    <Route path="/costco" element={<Costco/>}/>
                    <Route path="/heb" element={<Heb/>}/>
                    <Route path="/kroger" element={<Kroger/>}/>
                    <Route path="/samsclub" element={<SamsClub/>}/>
                    <Route path="/sprouts" element={<Sprouts/>}/>
                    <Route path="*" element={<ErrorComponent/>}/>
                </Routes>
            </Router>

        </div>
    )

    export default function StoreListings() {
        return (
            <div style={{ margin: "auto" }}>
                <h2>Browse stores in Houston</h2>
    <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
            <Row>
                <Col xs=".5" >
                    <Image src={AldiLogo} roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
            <Col sm="1"></Col>
            <Row >
                <Col xs=".5">
                    <Image src={SproutsLogo} roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                    <p>Delivery * Pickup</p>
                </Col>
            </Row>
            <Col sm="1"></Col>
            <Row >
                <Col xs=".5" >
                    <Image src={KrogerLogo} roundedCircle />
                </Col>
                <Col md="6">
                    <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                    <p>Delivery</p>
                </Col>
            </Row>
        </Row>
    </Container>
            </div >
        )
    }
}

export default StoreNav

