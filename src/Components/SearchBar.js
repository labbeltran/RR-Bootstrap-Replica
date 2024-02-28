import {useState} from 'react'

function SearchBar(){
    const [searchAddress, setSearchAddress] = useState([])

    const handleSearchAddress= (e)=>{
        //fetch market api and hyperlink//

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
        </div>
    )
}

export default SearchBar