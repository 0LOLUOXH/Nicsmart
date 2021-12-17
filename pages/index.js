import Head from "next/head"
import styles from '../styles/test.js'
export default function Home(){

    

    return (
        <>
        <Head>
            <title>Home | Nicsmart</title>
        </Head>

            

            <div className="row">

                <div className="col l6 test" >
                    <span className="simu_h2">Nicsmart</span>
                    <br/><span className="color_h2 simu_h2"> E-comerce</span>
                    <span className="simu_h2"> que</span>
                    <br/><span className="simu_h2"> te ahorra tiempo</span>
                    <p className="otro_h2">En nicsmart encontraras los productos de tu preferencia y<p>con disponibilidad de pago
en línea evitando que pierdas tu tiempo.</p></p>

                    <br/><a className="boton" href="#">
                        Catálogo &nbsp;
                        <i className="material-icons">
                            import_contacts
                        </i>
                    
                    </a>
                </div> 


                <div className="col l6 box_m ">
                    
                    <div className="caja">  
                        <span className="jut">
                            <i className="material-icons">
                                phone_android
                            </i>

                            Poco X3 Pro
                        </span>

                        <br/><br/><span className="jut">
                            <i className="material-icons">
                                shopping_cart
                            </i>
                            <br/><br/><p>Adquiere el equipo más potente a un precio competitivo</p>
                        </span>

                        <div className="caja_soon"></div>

                    </div>
                    
                </div>

                <div className="col l6">
                        <p>hola</p>
                </div>

            </div>
          
          
            <style jsx>
                {styles}
            </style>
        </>

    )

}