import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Header/logo.png';
import News from '../News/News';
import s from './Header.module.css';


const Header = ()=>{
    return (
        <header className={s.header}>
            <NavLink to='/'><img src={Logo} className={s.logo_img}/></NavLink>
        </header>
    )
}

export default Header;