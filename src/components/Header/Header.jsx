import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import Logo from '../Header/logo.png';
import s from './Header.module.css';



const Header = (props)=>{
   
    return (
        <header className={s.header}>
            <div className={s.header_wrapper}>
            <NavLink to='/'><img src={Logo} className={s.logo_img}/></NavLink>
            <div className={s.login_block}>
            {props.isAuth 
            ? <div> {props.login} <button className={s.logoutBtn} onClick={props.logout}>Log Out</button> </div> 
            : <NavLink to={'login/'}>Login</NavLink>}
            </div>
            </div>
        </header>
    )
}

export default Header;