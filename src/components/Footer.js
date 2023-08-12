import { Link } from "react-router-dom"
import "../CSS/Footer.css"
import { ReactComponent as CompanyLogo } from "../assets/Logo.svg"





export const Footer = () => {

    return (
        <div className="footer">
            <CompanyLogo />
            <nav>
                <div className="nav-footer">
                    <h1>Doormat Navigation</h1>
                    <Link to='/home' className='link'>Home</Link>
                    <Link to='/menu' className='link'>Menu</Link>
                    <Link to='/reservation' className='link'>Reservation</Link>
                    <Link to='/order-online' className='link'>Order Online</Link>
                    <Link to='login' className='link'>Login</Link>
                </div>
                <div className="nav-footer">
                    <h1>Contact</h1>
                    <Link to='/address' className="link">Address</Link>
                    <Link to='/phone-number' className="link">phone number</Link>
                    <Link to='/email' className="link">email</Link>
                </div>
                <div className="nav-footer">
                    <h1>Social Media Links</h1>
                    <div className="social-media-icons">
                        <a href="https://www.instagram.com/littlelemonmeta/"  className="fa fa-instagram"/>
                        <a href="https://twitter.com/littlelemonmeta" className="fa fa-twitter" />
                        <a href="https://www.youtube.com/channel/UCrd6OWO0IpuVjibO4Q1IwwQ" className=" fa fa-brands fa-youtube" />
                        
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}