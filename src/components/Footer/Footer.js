import { Link } from "react-router-dom"
import "../../CSS/Footer.css"
import { ReactComponent as CompanyLogo } from "../../assets/Logo.svg"





export const Footer = ({handleScrollToTop}) => {

    

    return (
        <div className="footer">
            <CompanyLogo />
            <nav>
                <div className="nav-footer">
                    <h1>Doormat Navigation</h1>
                    <Link to='/' className='link' onClick={handleScrollToTop}>Home</Link>
                    <Link to='/menu' className='link'>Menu</Link>
                    <Link to='/reservation' className='link' onClick={handleScrollToTop}>Reservation</Link>
                    <Link to='/order-online' className='link'>Order Online</Link>
                    <Link to='/login' className='link'>Login</Link>
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
                        <a href="https://www.instagram.com/littlelemonmeta/" data-testid="instagram"  className="fa fa-instagram" target="_blank" rel="noopner noreferrer"/>
                        <a href="https://twitter.com/littlelemonmeta" data-testid="twitter" className="fa fa-twitter" target="_blank" rel="noopner noreferrer"/>
                        <a href="https://www.youtube.com/channel/UCrd6OWO0IpuVjibO4Q1IwwQ" data-testid="youtube" className=" fa fa-brands fa-youtube" target="_blank" rel="noopner noreferrer"/>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}