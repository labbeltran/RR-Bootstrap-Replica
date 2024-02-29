import Errorlogo from './error-logo.png'



function ErrorComponent (){
    const ErrorLogo= Errorlogo

    return (
        <div>
          
            <img src={ErrorLogo} alt="You can't see ME" />
        
        </div>
      )
  
}

export default ErrorComponent