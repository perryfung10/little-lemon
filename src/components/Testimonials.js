import { useState } from "react"
import "../CSS/Testimonials.css"
import alan from "../assets/Testimonials/Alan.jpg"
import mary from  "../assets/Testimonials/Mary.jpg"
import matthew from "../assets/Testimonials/Matthew.jpg"
import jenny from "../assets/Testimonials/Jenny.jpg"



export const Testimonials = () => {

    const [usersData, setUsersData] = useState([{
        id: 1,
        img: alan,
        userName: "Alan",
        rating: <span className="rating"><span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span></span>,
        review: "The food is really delicious, especially the bruschetta which is classic with reasonable price."
    },
    {
        id: 2,
        img: mary,
        userName: "Marry",
        rating: <span className="rating"><span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span></span>,
        review: "The whole experience is nice from shop design to delivery."
    },
    {
        id: 3,
        img: matthew,
        userName: "Matthew",
        rating: <span className="rating"><span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span></span>,
        review: "Everything is absolutely gorgeous. For instance, the order app whose UI has clear instructions that we can pick our food wtih customizable options seamlessly"
    },
    {
        id: 4,
        img: jenny,
        userName: "Jenny",
        rating: <span className="rating"><span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star "></span>
        <span className="fa fa-star"></span></span>,
        review: "The whole experience is nice from shop design to delivery."
    }]
    )


    return (
            // <img src={usersData[3].img} style={{width: '100px', height: "100px" }} />
        <section className="testimonials">
            <h1 className="section-title">Testimonials</h1>
            <div className="testimonials-card">
            {usersData.map((userData) => {
                return (
                    
                        <article key={userData.id} className="testimonial-card">
                            <p className="rating">{userData.rating}</p>
                            <div className="user-alignment">
                                <img className="user-photo" src={userData.img} alt="Alan" />
                                <h3 className="user-name">{userData.userName}</h3>
                            </div>
                            <blockquote className="testimonial-description"><i>" {userData.review} "</i></blockquote>
                        </article>
                    )
            })}
            </div>
        </section>
    )
}