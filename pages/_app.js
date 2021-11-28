import Head from 'next/head'
export default function Layout({Component, pageProps}){
    
    return(
        <>
            <Head>
            <script>M.AutoInit();</script>
            
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" defer></script>
    

            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            </Head>
            <Component {...pageProps} />
        </>
    )

}