import styles from '../styles/styles'
import Head from 'next/head'
import XD from '../components/fragment'

export default function Home(){

    return (
        <>
            <Head><title>Nicsmart</title></Head>
            <div className = "jou" ><h1>hello</h1></div>
            <XD/>
            <style jsx>
                {styles}
            </style>
        </>

    )

}