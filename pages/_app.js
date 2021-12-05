import '../styles/style.css'

export default function Layout({Component, pageProps}){
    
    return(
        <>
            <header><p>header</p></header>
            <Component {...pageProps} />
        </>
    )

}