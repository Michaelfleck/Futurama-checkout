
import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import './navbar.css'
import logo from '../imgs/Futurama_1999_logo.svg'; 


export const Navbar = () => {
  return (
  <div className='navbar'> 
        <div className='links'>
            <img src={logo} alt="Futurama Logo" className="navbar-logo"/>
            <Link to='/'> Shop </Link>
            <Link to='/cart'>
                <ShoppingCart size={32} />
            </Link>
        </div>
    </div>
  );
};
