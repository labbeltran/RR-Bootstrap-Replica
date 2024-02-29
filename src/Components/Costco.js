import Costcologo from './costco-logo.png'

const CostcoLink = `https://www.costco.com/grocery-household.html`

const clickCostcoLink = ()=>{
    const CostcoLogo= Costcologo

    return (
        <div>
          <a href={CostcoLink}>
            <img src={CostcoLogo} alt="Costco Logo" />
          </a>
        </div>
      )
  
}

export default clickCostcoLink