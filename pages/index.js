import styles from '../styles/styles'
import Head from 'next/head'

export default function Home(){

    return (
        <>
            <Head><title>Nicsmart</title></Head>
            <div className = "jou" ><h1>hello</h1></div>
            <style jsx>{
                styles
                }</style>

        </>

    )

}