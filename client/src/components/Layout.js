import React,{useEffect} from 'react'
import { adminMenu, userMenu } from '../Data/data';
import '../styles/layoutStyles.css';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { setUser } from '../redux/features/userSlice';
import {message} from 'antd';
import Cookies from 'js-cookie';
const Layout = ({children}) => {
    const {user}= useSelector(state=>state.user)
    const location=useLocation();
   const dispatch=useDispatch();
   const sidebarMenu=(user?.isAdmin)? adminMenu: userMenu;


    const Navigate=useNavigate();
    const handleLogout=()=>{
        sessionStorage.clear();
        Cookies.remove('login');
        message.success('Logout Successfully');
        dispatch(setUser(null));
    }

  return (
    
    <>
        <div className="main">
            <div className="layout">
                <div className="sidebar">
                    <div className="logo"><h6>bookMySlot</h6><hr/></div>
                    <div className="menu">
                    {sidebarMenu.map(menu=>{
                        const isActive=location.pathname==menu.path
                        return (
                            <>
                                <div className={`menu-items ${isActive && 'active'}`}>
                                    <i className={menu.icon}></i>
                                    <Link to={menu.path}>{menu.name}</Link>
                                </div>
                            </>
                        )
                    })}
                    
                    <div className={`menu-items ` }onClick={handleLogout}>
                                    <i className='fa-solid fa-right-from-bracket'></i>
                                    <Link to='/login'>Logout</Link>
                                </div>
                           

                    
                    </div>
                </div>
                <div className="content">
                    <div className="header">
                    <div className="header-content">
                    <i class="fa-solid fa-bell"></i>
                    <Link to='/profile'>{user?.name}</Link>
                    </div>
                    
                    </div>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout