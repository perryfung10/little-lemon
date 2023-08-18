import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from "../assets/Logo.svg"
import "../CSS/Header.css"


const Nav = ({children}) => {

    return (
        <>
            {children}
        </>
    )
}

export const Header = () => {

    return (
        <Nav>
            <header className="header">
                <div className='logo'>
                    {/* <img src="../assets/Logo.svg" alt="logo"/> */}
                    <Logo alt="logo" width={200} height={200}/>
                </div>
                <nav>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/menu' className='link'>Menu</Link>
                    <Link to='/reservation' className='link'>Reservation</Link>
                    <Link to='/order-online' className='link'>Order Online</Link>
                    <Link to='login' className='link'>Login</Link>
                </nav>
            </header>
        </Nav>
        
    )
}