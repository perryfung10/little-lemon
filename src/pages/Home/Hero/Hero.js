import { Link } from "react-router-dom"
import "./Hero.css"
import restaurantFoodPic from "../../../assets/restauranfood.jpg"

export const Hero = ({handleScrollToTop}) => {
    


    return (
        <div className="Hero">
            <section className="hero-section">
                <article className="hero-article">
                    <div className="hero-texts">
                        <h1 className="hero-title">Little Lemon</h1>
                        <h2 className="hero-subtitle">Chicago</h2>
                        <p  className="hero-description">Little Lemon offers a delightful dining experience. Located in the heart of Chicago, our restaurant is known for its warm ambiance, exceptional service, and delectable cuisine.</p>
                        <Link to="/reservation" className="reservation-btn" onClick={handleScrollToTop}>Reserve a table</Link> 
                    </div>
                    <img src={restaurantFoodPic} alt="Little Lemon Restaurant" />
                </article>
                
            </section>
            <div className="block"></div>
        </div>
        
       
    )
}