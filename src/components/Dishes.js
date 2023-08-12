import "../CSS/Dishes.css"
import greekSaladPic from "../assets/dishesFotos/greek salad.jpg"
import bruschettaPic from "../assets/dishesFotos/Bruschetta.png"
import lemonDessertPic from "../assets/dishesFotos/lemon dessert.jpg"
import { ReactComponent as TruckLogo } from "../assets/truck-solid.svg"
import { Link } from "react-router-dom"



export const Dishes = () => {

    return (
        <section className="dishes">
            <div className="dishes-title">
                <h1>This Week Specials!</h1>
                <Link to="/order-online" className="online-menu">Online Menu</Link>
            </div>
            <div className="dishes-card">
                <article className="dish-card">
                    <img src={greekSaladPic} alt="" />
                    <div className="dish-content">
                        <h3 className="dish-title">Greek Salad</h3>
                        <p className="dish-price">$12.99</p>
                        <p className="dish-description">This is a template of week’s special ‘s description</p>
                        <Link to="/order-online" className="dish-order">Order Delivery <span><TruckLogo className="delivery-btn" /></span></Link>
                    </div>
                </article>
                <article className="dish-card">
                    <img src={bruschettaPic} alt="bruschetta" />
                    <div className="dish-content">
                        <h3 className="dish-title">Bruschetta</h3>
                        <p className="dish-price">$5.99</p>
                        <p className="dish-description">This is a template of week’s special ‘s description</p>
                        <Link to="/order-online" className="dish-order">Order Delivery <span><TruckLogo className="delivery-btn" /></span></Link>
                    </div>
                </article>
                <article className="dish-card">
                    <img src={lemonDessertPic} alt="lemon dessert" />
                    <div className="dish-content">
                        <h3 className="dish-title">Lemon Dessert</h3>
                        <p className="dish-price">$5.00</p>
                        <p className="dish-description">This is a template of week’s special ‘s description</p>
                        <Link to="/order-online" className="dish-order">Order Delivery <span><TruckLogo className="delivery-btn" /></span></Link>
                    </div>
                </article>
            </div>
            
        </section>

    )
}