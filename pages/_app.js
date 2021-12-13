import { useEffect, lazy } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import {useAuth0} from '@auth0/auth0-react';
import {Auth0Provider} from '@auth0/auth0-react';
// import M from 'materialize-css'



export default function Layout({Component, pageProps, domain, clientId}){
    async function initMaterialize(){
        const M = await import('materialize-css')
        M.AutoInit()
    }
    
    useEffect(() => {
        if(typeof window !== 'undefined'){
            initMaterialize()
        }
    }, [])
    console.log( domain, clientId );
    return(
        <>
            <Head>
            
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                        
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            </Head>
            <Script strategy='afterInteractive' src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"/>
            <Auth0Provider
            domain={"dev-fbl4xiyw.us.auth0.com"}
            clientId = {"r8MOJbL3McvltAhZzodQpaLGeQK3xlin"} 
            redirectUri = {"http://localhost:3000"}
            >
            
                <Component {...pageProps} />
            </Auth0Provider>
            
        </>
    )
 
}
export async function getStaticProps() {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

    return { props: {clientId, domain} }
}