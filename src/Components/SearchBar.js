import {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import instabckgd from './insta-background.jpg'

function SearchBar(){
    const instaBackground = instabckgd
    const [searchAddress, setSearchAddress] = useState([])

    const handleSearchAddress= (e)=>{
        //fetch market api and hyperlink; need a useEffect for api fetch//

    }

    return(
        <div>
          
            <div>
                <label htmlFor="address">Enter Your Address</label>
                <input className="form-control" id="pronoun" name="searchAddress" value=""  required />
                
            </div>
            <div>
            <input className="btn btn-primary" type="submit" value="Search Address" onClick={handleSearchAddress} />
            </div>
            <div>
            return (
        <div>
            <Navbar bg="light" expand="lg" style={{display: 'flex', justifyContent: 'space-between'}}>
                <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home"><img src={instaBackground} alt="instacart background template" /> </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }} >
                        <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" style={{fontSize: "18px"}}>Sign Up</Button>{''}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
            </div>
        </div>
    )
}

export default SearchBar