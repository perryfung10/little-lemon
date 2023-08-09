import {Routes, Route, Link } from 'react-router-dom';
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
                    <Logo />
                </div>
                <nav>
                    <Link to='/home' className='link'>Home</Link>
                    <Link to='/menu' className='link'>Menu</Link>
                    <Link to='/reservation' className='link'>Reservation</Link>
                    <Link to='/order-online' className='link'>Order Online</Link>
                    <Link to='login' className='link'>Login</Link>
                </nav>
                <Routes>
                    {/* <Route path='/home' element={<Home />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/reservation' element={<Reservation />} />
                    <Route path='/order-online' element={<OrderOnline />} />
                    <Route path='/login' element={<Login />} /> */}
                </Routes>
            </header>
        </Nav>
        
    )
}