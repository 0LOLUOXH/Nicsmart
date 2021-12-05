import { useEffect, lazy } from 'react'
import Head from 'next/head'
import Script from 'next/script'
// import M from 'materialize-css'

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

            </Head>
            <Script strategy='afterInteractive' src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"/>
            <Component {...pageProps} />
        </>
    )

}