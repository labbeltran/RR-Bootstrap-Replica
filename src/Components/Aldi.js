import Aldilogo from './aldi-logo.png'

const AldiLink = `https://www.aldi.us/?utm_source=google&utm_medium=sem&utm_campaign=brand&utm_term=aldi&gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNZL_irEo_4CygmwOPjd_YkAZ95F_5J4xjCExM-ezbXjK_c3UtCIeYRoC07QQAvD_BwE&gclsrc=aw.ds`

const clickAldiLink = ()=>{
    const AldiLogo= Aldilogo

    return (
        <div>
          <a href={AldiLink}>
            <img src={AldiLogo} alt="Aldi Logo" />
          </a>
        </div>
      )
  
}

export default clickAldiLink