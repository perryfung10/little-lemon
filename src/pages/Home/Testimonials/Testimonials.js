import { useState } from "react"
import "./Testimonials.css"
import alan from "../../../assets/Testimonials/Alan.jpg"
import mary from  "../../../assets/Testimonials/Mary.jpg"
import matthew from "../../../assets/Testimonials/Matthew.jpg"
import jenny from "../../../assets/Testimonials/Jenny.jpg"



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
        review: "The kinds of food could be more diverse. Overall, it is not bad."
    }]
    )

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prev => prev + 1 === usersData.length ? 0 : prev + 1)
    }
    const handlePrev = () => {
        setCurrentIndex(prev => prev - 1 < 0 ? usersData.length - 1 : prev - 1)

    }


    return (
        <section className="testimonials">
            <h1 className="section-title">Testimonials</h1>
            <div className="testimonials-card" >
            {usersData.map((userData) => {
                return (
                    
                        <article key={userData.id} className={`testimonial-card`}>
                            <p className="rating">{userData.rating}</p>
                            <div className="user-alignment">
                                <img className="user-photo" src={userData.img} alt={userData.userName} />
                                <h3 className="user-name">{userData.userName}</h3>
                            </div>
                            <blockquote data-testid="review" className="testimonial-description"><i>" {userData.review} "</i></blockquote>
                        </article>
                    )
            })}
            </div>
            <div className="carousell">
                        <article className="testimonial-card">
                            <p className="rating">{usersData[currentIndex].rating}</p>
                            <div className="user-alignment">
                                <img className="user-photo" src={usersData[currentIndex].img} alt={usersData[currentIndex].us} />
                                <h3 className="user-name">{usersData[currentIndex].userName}</h3>
                            </div>
                            <blockquote data-testid="review" className="testimonial-description"><i>" {usersData[currentIndex].review} "</i></blockquote>
                        </article>
                        <button className='prev' type='text' onClick={handlePrev}>&#10094;</button>
                        <button className='next' type='text' onClick={handleNext}>&#10095;</button>
                        <div className='dots'>
                            {usersData.map(userData => 
                                <span key={userData.id} className={`dot ${userData.id === currentIndex + 1 ? "active": ""}`} onClick={()=> setCurrentIndex(userData.id - 1)}></span>
                                )}
                        </div>

            </div>
        </section>
    )
}