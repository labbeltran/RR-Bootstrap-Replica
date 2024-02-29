import Heblogo from './HEB-Logo.png'

const HebLink = `https://www.heb.com/`

const clickHebLink = ()=>{
    const HebLogo= Heblogo

    return (
        <div>
          <a href={HebLink}>
            <img src={HebLogo} alt="HEB Logo" />
          </a>
        </div>
      )
  
}

export default clickHebLink