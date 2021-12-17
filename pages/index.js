import Head from "next/head"
import styles from '../styles/test.js'
export default function Home(){

    

    return (
        <>
        <Head>
            <title>Home | Nicsmart</title>
        </Head>

            

            <div className="row">

                <div className="col s5 test" >
                    <span className="simu_h2">Nicsmart</span>
                    <br/><span className="color_h2 simu_h2"> E-comerce</span>
                    <span className="simu_h2"> que</span>
                    <br/><span className="simu_h2"> te ahorra tiempo</span>
                    <p className="otro_h2">En nicsmart encontraras los productos de tu preferencia y<p>con disponibilidad de pago
en línea evitando que pierdas tu tiempo.</p></p>
                
                </div> 


                <div className="col l5 box_m ">
                    
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