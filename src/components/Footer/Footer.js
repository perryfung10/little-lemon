import { Link } from "react-router-dom"
import "./Footer.css"
import { ReactComponent as CompanyLogo } from "../../assets/Logo.svg"





export const Footer = ({handleScrollToTop}) => {

    

    return (
        <div className="footer">
            <CompanyLogo />
            <nav>
                <div className="nav-footer">
                    <h1>Doormat Navigation</h1>
                    <Link to='/' className='link' onClick={handleScrollToTop}>Home</Link>
                    <Link to='/menu' className='link' onClick={handleScrollToTop}>Menu</Link>
                    <Link to='/reservation' className='link' onClick={handleScrollToTop}>Reservation</Link>
                    <Link to='/order-online' className='link' onClick={handleScrollToTop}>Order Online</Link>
                    <Link to='/login' className='link' onClick={handleScrollToTop}>Login</Link>
                </div>
                <div className="nav-footer">
                    <h1>Contact</h1>
                    <h3 className="h3">Address:</h3>
                    <span>G/F, Block H, FULL PARK GADREN NO.209, NAI WAI, TUEN MUN, N.T.</span>
                    <h3 className="h3">phone number:</h3>
                    <span>+852 <a href="tel:+852628696543" className="phone-num">628696543</a></span>
                    <h3 className="h3">Email:</h3>
                    <a className="email" href="mailto:p.y.fung.101@gmail.com">p.y.fung.101@gmail.com</a>
                </div>
                <div className="nav-footer">
                    <h1 id="social-media-link">Social Media Links</h1>
                    <div className="social-media-icons">
                        <a href="https://www.instagram.com/littlelemonmeta/" data-testid="instagram"  className="fa fa-instagram" target="_blank" rel="noopner noreferrer" aria-labelledby="social-media-link"  aria-describedby="little lemon restaurant instagram link"/>
                        <a href="https://twitter.com/littlelemonmeta" data-testid="twitter" className="fa fa-twitter" target="_blank" rel="noopner noreferrer" aria-labelledby="social-media-link" aria-describedby="little lemon restaurant twitter link"/>
                        <a href="https://www.youtube.com/channel/UCrd6OWO0IpuVjibO4Q1IwwQ" data-testid="youtube" className=" fa fa-brands fa-youtube" target="_blank" rel="noopner noreferrer" aria-labelledby="social-media-link" aria-describedby="little lemon restaurant youtube link"/>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}