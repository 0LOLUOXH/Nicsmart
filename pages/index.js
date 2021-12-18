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
                    <p className="otro_h2">En nicsmart encontrarás los productos de tu preferencia y<p>con disponibilidad de pago
en línea evitando que pierdas tu tiempo.</p></p>

                    <br/><a className="boton" href="#">
                        Catálogo &nbsp;
                        <i className="material-icons">
                            import_contacts
                        </i>
                    
                    </a>
                </div> 


                <div className="col l6 box_m2 ">
                    
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

                        <div className="row caja_soon">
                            <div className="col l7">
                                <img src="https://i.blogs.es/97812d/poco-f3-pro-00-01/450_1000.jpg" alt="Poco x3 Pro GOD" />
                            </div>

                            <div className="col l5">
                                <h6> 
                                    Poco X3 Pro
                                </h6>

                                <span> Xiaomi - Poco</span>

                            </div>

                            <div className="col l5">
                                <a className="color_h2" href="#">
                                    Comprar 
                                </a>
                            </div>
                        </div>

                    </div>
                    
                </div>

            </div>
          
            <div className="row">
                    <div className="col l12 box_m">
                        <div className="col l12 m2">
                            <span className="color_h2">Products</span>
                        </div>

                        <div className="col l7 m" >
                            <span className="simu2_h2 test">Encuentra una &nbsp;gran</span>
                            <span className="simu2_h2">cantidad de</span>
                            <br/><span className="simu2_h2">dispositivos con fácil</span>
                            <br/><span className="color_h2 simu2_h2">disponibilidad</span>
                            <p className="otro_h2">una e-commerce con diseño agradable y accesible a todos los usuarios.</p>
                        </div> 

                        <div className="col l5 row">
                            <div className="col l12 m caja_soon2 row">
                                <div className="col l5">
                                    <img src="/images/selfo.png" alt="icon" />
                                </div>

                                <div className="col l7">
                                    <h6> 
                                        Dispositivos inteligentes
                                    </h6>

                                    <span>Accede a laptops, smartphone</span>

                                </div>

                                <div className="col l5">
                                    <a className="color_h2" href="#">
                                        Descubrir
                                    </a>
                                </div>
                            </div>
                        
                            <div className="col l12 m caja_soon2">
                                <div className="col l5">
                                    <img src="/images/selfo.png" alt="icon" />
                                </div>

                                <div className="col l7">
                                    <h6> 
                                        Componentes
                                    </h6>

                                    <span>CPU, Tarjetas graficas, etc.</span>

                                </div>

                                <div className="col l5">
                                    <a className="color_h2" href="#">
                                        Descubrir
                                    </a>
                                </div>
                            </div>     
                        </div>

                    </div>
            </div>

            <div className="row">
                <div className="col l12 ">
                        <div className="col l12 m2">
                            <span className="color_h2">Disponibles</span>
                        </div>

                        <div className="col l7 m" >
                            <span className="simu2_h2 test">Estamos disponibles &nbsp;&nbsp;las</span>
                            <span className="simu2_h2">24h del día, los 365</span>
                            <br/><span className="simu2_h2">días del año con</span>
                            <br/><span className="simu2_h2">disponibilidad y &nbsp;&nbsp;atención</span>
                            <span className="simu2_h2">al cliente</span>
                        </div>

                        <div className="col l5 m">
                            <img className="opo" src="/images/sl.png" alt="icon" />
                        </div>

                </div>    
            </div>

            <footer className="fot row">
                <div className="col l6">
                    <div className="col l12">
                        <img className="op" src="/images/lo.png" alt="icon" />
                    </div>

                    <div className="col l12 e_p">
                        <p>Gracias por visitarnos</p>
                    </div>

                    <div className="col l12 e_p2">
                        <p>Nicsmart ©2021</p>
                    </div>
                </div>

                <div className="m col l6">
                    <div className="col l12 e_p">
                        Products
                    </div>

                    <div className="col l12 m">
                        <a className="color_h2" href="#">Dispositivos inteligentes</a>
                    </div>

                    <div className="col l12 m">
                        <a className="color_h2" href="#">Componentes</a>
                    </div>
                </div>
            </footer>
          
            <style jsx>
                {styles}
            </style>
        </>

    )

}