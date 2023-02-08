import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import logo from '../../assets/stack-overflow-logo-vector.png'
import { setCurrentUser } from '../../actions/currentUser';

export const Navbar = () => {

    const dispatch = useDispatch()
    var User = useSelector((state)=>(state.currentUserReducer))

    useEffect(()=>{
        const token = User?.token
        if(token){
            const decodeToken = decode(token)
            if(decodeToken.exp * 1000 < new Date().getTime()){
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

    const navigate = useNavigate()

    const handleLogout =() =>{
        dispatch({type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }

  return (
    <nav className='main-nav'>
       <div className='navbar'>
        <Link to='/' className='nav-item nav-logo'>
            <img className='nav-brand' src={logo}alt='logo'/>
        </Link>
        <Link to='/' className="nav-item nav-btn">About</Link>
        <Link to='/' className="nav-item nav-btn">Contact Us</Link>
        <Link to='/' className="nav-item nav-btn">Help</Link>
        <form>
            <input type="text" placeholder='search'/>
        </form>
        {User === null ?
            <Link to='/Auth'className='nav-item nav-links'>Log In</Link> :
            <>
            <Avatar backgroundColor="#009dff" py="8px" px="14px" borderRadius="50%" color="white"><Link to={`Users/${User?.result?._id}`} style={{textDecoration:"none", color:"white"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button>
            </>
            
        }
       </div>
    </nav>
  )
}
