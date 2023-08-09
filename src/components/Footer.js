import { Link } from "react-router-dom"
import "../CSS/Footer.css"

export const Footer = () => {

    return (
        <div className="footer">
            {/* <Logo /> */}
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
                    <Link to='/address' className="link">Address</Link>
                    <Link to='/phone-number' className="link">phone number</Link>
                    <Link to='/email' className="link">email</Link>
                </div>
            </nav>
        </div>
    )
}