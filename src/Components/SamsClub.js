import Samslogo from './Sams-Club-Logo.png'

const SamsLink = `https://www.samsclub.com/c/grocery/1444`

function clickSamsLink (){
    const SamsLogo= Samslogo

    return (
        <div>
          <a href={SamsLink}>
            <img src={SamsLogo} alt="Sams Club Logo" />
          </a>
        </div>
      )
  
}

export default clickSamsLink