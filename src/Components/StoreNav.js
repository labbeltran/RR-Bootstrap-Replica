import {useState} from 'react'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import Aldilogo from './aldi-logo.png'
import Costcologo from './costco-logo.png'
import Heblogo from './HEB-Logo.png'
import Krogerlogo from './kroger logo.png'
import Samslogo from './Sams-Club-Logo.png'
import Sproutslogo from './sprouts-logo.png'
import Instahome from './insta-logo.png'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Error from './ErrorLogo.png'

function StoreNav(){
const InstaHome = Instahome
const AldiLogo = Aldilogo
const CostcoLogo = Costcologo
const HebLogo= Heblogo
const KrogerLogo= Krogerlogo
const SamsLogo= Samslogo
const SproutsLogo= Sproutslogo
const ErrorLogo= Error

    return(
        <div>
            <Router>
                <Container>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link>
                                <img src={InstaHome} alt="Instacart Logo Here" href="/"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <img src={AldiLogo} alt="Aldi Stores Logo" href="/aldi"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <img src={CostcoLogo} alt="Costco Wholesale Logo" href="/costco"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <img src={HebLogo} alt="HEB Logo" href="/heb"/>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <img src={KrogerLogo} alt="Kroger Logo" href="/kroger" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                            <img src={SamsLogo} alt="Sams Club Logo" href="/sams" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                            <img src={SproutsLogo} alt="Sprouts Market Logo" href="/sprouts" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                            <img src={ErrorLogo} alt="Error" href="/*" />
                            </Nav.Link>
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
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Router>

        </div>
    )
}

export default StoreNav