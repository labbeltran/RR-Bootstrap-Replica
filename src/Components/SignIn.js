

function SignIn(){

    return(
        <div>
            <div className="languageBtn" id="language">
                <label>Language</label>
                <select>
                <option value="">Please select a desired language:</option>    
                <option value="English"></option>    
                <option value="Spanish"></option>
                <option value="Mandarin"></option>
                <option value="Japanese"></option>
                <option value="Cantonese"></option>
                <option value="French"></option>
                <option value="German"></option> 
                <option value="Tagalog"></option>  
                </select>

            </div>
            <div className="signButtons" id="signButtons"> 
                <input className="btn btn-primary" type="submit" value="Sign In">Sign In</input>
                <input className="btn btn-secondary" type="submit" value="Sign Up">Sign Up</input>
            </div>



        </div>
    )
}

export default SignIn