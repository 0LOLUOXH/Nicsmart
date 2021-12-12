import { useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import  '../styles/styles.css'
import Link from 'next/link';

export default function Layout({Component, pageProps}){
    async function initMaterialize(){
        const M = await import('materialize-css')
        M.AutoInit()
    }
    
    useEffect(() => {
        if(typeof window !== 'undefined'){
            initMaterialize()
        }
    }, [])

    return(
        <>
            <Head>
            
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
            </Head>
            <Script strategy='afterInteractive' src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"/>
            <header>
                <nav className=" blue-grey darken-4">
                    <div className="nav-wrapper">
                    <Link href="/"><a href="#!" className="brand-logo center"><img height="35px" src="/images/lo.png" alt="xdxdd" /></a></Link>
                        <ul className="left hide-on-med-and-down">
                            <li><a href="#">Promociones</a></li>
                            <li><a href="#">Productos</a></li>
                            <li className="active"><a href="#">Marcas</a></li>

                            <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Cuenta</a>
                            <ul id='dropdown1' className='dropdown-content'>
                                <li><a href="#!">Iniciar de sesión</a></li>
                                <li><a href="#!">Crear cuenta</a></li>
                                <li className="divider" tabIndex="-1"></li>
                                <li><a href="#!">Cerrar sesión</a></li>
                            </ul>
                        </ul>
                    </div>
                </nav>
            </header>
            <Component {...pageProps} />
        </>
    )

}