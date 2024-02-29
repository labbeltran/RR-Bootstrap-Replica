
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Aldilogo from './aldi-logo.png'
import Costcologo from './costco-logo.png'
import Heblogo from './HEB-Logo.png'
import Krogerlogo from './kroger-logo.png'
import Samslogo from './Sams-Club-Logo.png'
import Sproutslogo from './sprouts-logo.png'
import Instahome from './insta-logo.png'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Error from './ErrorLogo.png'

import Aldi from './Aldi';
import Costco from './Costco';
import Heb from './Heb';
import Kroger from './Kroger';
import SamsClub from './SamsClub';
import Sprouts from './Sprouts';
import Home from './Home'
import ErrorComponent from './Error'

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
}

export default StoreNav

