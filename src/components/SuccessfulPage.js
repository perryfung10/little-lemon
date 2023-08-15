import { useEffect, useState } from "react"
import { ReactComponent as SuccessfulLogo } from "../assets/check-solid.svg"
import "../CSS/SuccessfulPage.css"
import { useNavigate } from 'react-router-dom';

export const SuccessfulPage = () => {


    const [seconds, setSeconds] = useState(4)
    const navigate = useNavigate();
    

    useEffect(() => {
      const redirect = setTimeout(()=>{
        navigate("/")
      }, 5000);

      const interval = setInterval(()=> {
        setSeconds(s => s-1)
      }, 1000)
    
      return () => {
        clearTimeout(redirect);
        clearInterval(interval)
      }
    }, [navigate])
    

       
    

    return (
        <>
            <section className="successful">
                <h1 className="successfulMessage">Successful Booking</h1>
                <SuccessfulLogo width={150} height={150} style={{fill: "green", opacity: "0.6" }}/>
                <h2>return to Home Page in {seconds} seconds </h2> 
            </section>
        </>

        

    )


}