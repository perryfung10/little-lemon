import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from "../../assets/Logo.svg"
import "./Header.css"




export const Header = () => {

    return (
            <header className="header">
                <div className='logo'>
                    {/* <img src="../assets/Logo.svg" alt="logo"/> */}
                    <Logo alt="Logo" width={200} height={200}/>
                </div>
                <nav>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/menu' className='link'>Menu</Link>
                    <Link to='/reservation' className='link'>Reservation</Link>
                    <Link to='/order-online' className='link'>Order Online</Link>
                    <Link to='/login' className='link'>Login</Link>
                </nav>
            </header>
        
    )
}