import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import header from './styles/header';
export default function Header() {
    const { loginWithRedirect} = useAuth0();
    return (
        <>
        <header>
        <nav className=" blue-grey darken-4 d-flex header" >
            <div className="nav-wrapper">
            <Link href="/"><a href="#!" className="brand-logo center"><img height="35px" src="/images/lo.png" alt="xdxdd" /></a></Link>
                <ul className="left hide-on-med-and-down">
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Productos</a></li>
                    <li className="active"><a href="#">Marcas</a></li>

                    <a className='dropdown-trigger btn' href='#' data-target='dropdown1'  >Cuenta</a>
                    <ul id='dropdown1' className='dropdown-content'>
                        <li><a href="#!" onClick={() => loginWithRedirect()}>Iniciar de sesión</a></li> 
                        <li><a>Crear cuenta</a></li>
                        <li className="divider" tabIndex="-1"></li>
                        <li> <LogoutButton/> </li>
                    </ul>
                </ul> 
                <Profile/>

            </div>
        </nav>
        
    </header>
    <style jsx>
        {header}
    </style>
    </>
    
    )
}
