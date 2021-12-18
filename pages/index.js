import Head from "next/head"
import styles from '../styles/test.js'
export default function Home(){

    

    return (
        <>
        <Head>
            <title>Home | Nicsmart</title>
        </Head>

            

            <div className="row container-home">
                <div className="col l6 test" >
                    <div className="logo-hero">
                        <img src="/images/ba.png" className="logo-hero-mobile" width={350} alt="" />
                    </div>
                    <span className="simu_h2">Nicsmart</span>
                    <br/><span className="color_h2 simu_h2"> E-comerce</span>
                    <span className="simu_h2"> que</span>
                    <br/><span className="simu_h2"> te ahorra tiempo</span>
                    <p className="otro_h2">En nicsmart encontrarás los productos de tu preferencia y<br></br>con disponibilidad de pago
                    en línea evitando que pierdas tu tiempo.
                    </p>
                    <Link href="/products">
                        <a className="boton" href="#">
                            Catálogo &nbsp;
                            <i className="material-icons">
                                import_contacts
                            </i>
                        
                        </a>
                    </Link>
                </div> 


                <div className="col l6 box_m2 mobile-hidden">
                        <img src="/images/Fram.png" alt="" />
                </div>

            </div>
          
            <div className="row">
                    <div className="col l12 box_m">
                        <div className="col l12 m2">
                            <span className="color_h2">Products</span>
                        </div>

                        <div className="col l7 m title-v" >
                            <h2>Encuentra una gran cantidad de dispositivos, con facil</h2>
                            <h2 className="blue-title">Disponibilidad</h2>
                            <p>una e-commerce con diseño agradable y accesible a todos los usuarios.</p>
                        </div> 

                        <div className="col l5 row fila-mobile">
                            <div className="col l12 m caja_soon2 row">
                                <div className="col l5">
                                    <img src="/images/selfo.png" alt="icon" />
                                </div>
                                <div className="info-mini-card">
                                    <div className="col l7 mini-cards">
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
                            </div>
                        
                            <div className="col l12 m caja_soon2 card-minis">
                                <div className="col l5">
                                    <img src="/images/selfo.png" alt="icon" />
                                </div>
                                <div className="info-mini-card">
                                    <div className="col l7 mini-cards">
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
            </div>

            <div className="row">
                <div className="col l12 ">
                        <div className="col l12 m2">
                            <span className="color_h2">Disponibles</span>
                        </div>

                        <div className="col l7 m end-title" >
                            <h2>Estamos disponibles 24hr/365d con disponibilidad global y atención al cliente.</h2>
                        </div>

                        <div className="col l5 m yellow-image">
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