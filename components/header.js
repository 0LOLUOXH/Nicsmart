import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import header from './styles/header';
import  CartButton  from './CartButton';

export default function Header() {
    const { loginWithRedirect, isAuthenticated, user} = useAuth0();
    console.log(user)
    return (
        <>
        <header>
        <nav className=" blue-grey darken-4 d-flex header" >
            <div className="nav-wrapper">
            <Link href="/"><a href="#!" className="brand-logo center header-logo"><img height="35px" src="/images/lo.png" alt="xdxdd" /></a></Link>
                <ul className="left hide-on-med-and-down">
                    <li>
                        <Link href="/products">
                            <a>Productos</a>
                        </Link>
                    </li>
                    <a className='dropdown-trigger btn' href='#' data-target='dropdown1'  >Cuenta</a>
                    <ul id='dropdown1' className='dropdown-content'>
                        
                        <li className="divider" tabIndex="-1"></li>
                        {isAuthenticated ? <LogoutButton /> : <li><a href="#!" onClick={() => loginWithRedirect()}>Iniciar de sesión</a></li> }
                    </ul>
                </ul> 
                <Profile/>
                <a href="#" data-target="slide-out" class="sidenav-trigger only-mobile"><i className="material-icons">menu</i></a>
            </div>
        </nav>
        
    </header>
    <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">shopping_cart</i>
                </a>
                <ul>
                    
                    <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>   
                </ul>
    </div>
    <ul id="slide-out" class="sidenav">
        <li><div class="user-view">
        <div class="background">
            <img src="https://materializecss.com/images/sample-1.jpg"/>
        </div>
        <a href="#user"><img class="circle" src={user && user.picture}/></a>
        <a href="#name"><span class="white-text name">{user && user.nickname}</span></a>
        <a href="#email"><span class="white-text email">{user && user.email}</span></a>
        </div></li>
        {
            isAuthenticated ? (
                <li><LogoutButton/></li>
                ) : (
                    <li><a href="#!" onClick={() =>loginWithRedirect()}>Login</a></li>
            )
        }
    </ul>
   
    <style jsx>
        {header}
    </style>
    </>
    
    )
}
