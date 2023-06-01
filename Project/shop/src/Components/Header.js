import React from 'react';
import {NavLink} from "react-router-dom";


export default function Header() {
  return (
    <header>
        <span className='logo'>exeBooks</span>
        <ul className='nav'>
          <li><NavLink to="/">Главная</NavLink></li>
          <li><NavLink to="/Registration">Регистрация</NavLink></li>
          <li><NavLink to="/Login">Логин</NavLink></li>
          <li><NavLink to="/Basket">Корзина</NavLink></li>
        </ul>  
    </header>  
  )
}
