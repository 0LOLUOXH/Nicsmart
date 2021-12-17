import Head from "next/head"
import styles from '../styles/test.js'
export default function Home(){

    

    return (
        <>
        <Head>
            <title>Home | Nicsmart</title>
        </Head>

            

            <div className="row">

                <div className="col s5" className="test">
                    <h2>Nicsmart<h2 className="color_h2">E-comerce</h2>te ahorra tiempo</h2>
                    <p className="otro_h2">En nicsmart encontraras los productos de tu preferencia y<p>con disponibilidad de pago
en línea evitando que pierdas tu tiempo.</p></p>
                
                </div> 

                <div class="col l5">
                    
                    <div className="caja">  

                    </div>
                    
                </div>

              

            </div>
          
          
            <style jsx>
                {styles}
            </style>
        </>

    )

}