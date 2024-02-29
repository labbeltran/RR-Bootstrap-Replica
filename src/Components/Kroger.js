import Krogerlogo from './kroger-logo.png'

const KrogerLink = `https://www.samsclub.com/c/grocery/1444`

const clickKrogerLink = ()=>{
    const KrogerLogo= Krogerlogo

    return (
        <div>
          <a href={KrogerLink}>
            <img src={KrogerLogo} alt="Aldi Logo" />
          </a>
        </div>
      )
  
}

export default clickKrogerLink

































