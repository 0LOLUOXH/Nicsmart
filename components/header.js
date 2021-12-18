import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import header from './styles/header';

export default function Header() {
    const { loginWithRedirect, isAuthenticated} = useAuth0();
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

            </div>
        </nav>
        
    </header>
    <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">shopping_cart</i>
                </a>
                <ul>
                    <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                    <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                    <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                    <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
                </ul>
            </div>
    <style jsx>
        {header}
    </style>
    </>
    
    )
}
