import Sproutslogo from './sprouts-logo.png'

const SproutsLink = `https://www.samsclub.com/c/grocery/1444`

const clickSproutsLink = ()=>{
    const SproutsLogo= Sproutslogo

    return (
        <div>
          <a href={SproutsLink}>
            <img src={SproutsLogo} alt="Aldi Logo" />
          </a>
        </div>
      )
  
}

export default clickSproutsLink