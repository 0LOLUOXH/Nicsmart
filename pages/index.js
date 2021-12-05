import styles from "../styles/styles"
import Head from "next/head"
export default function Home(){

    return (
        <>
        <Head>
            <title>Home | Nicsmart</title>
        </Head>

            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">shopping_cart</i>
                </a>
                <ul>
                    <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                    <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                    <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                    <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
                </ul>
            </div>

            <nav className=" blue-grey darken-4">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo center"><img height="35px" src="/image/lo.png" alt="xdxdd" /></a>
                    <ul className="left hide-on-med-and-down">
                        <li><a href="#">Promociones</a></li>
                        <li><a href="#">Productos</a></li>
                        <li className="active"><a href="#">Marcas</a></li>

                        <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Cuenta</a>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li><a href="#!">Iniciar de sesión</a></li>
                            <li><a href="#!">Crear cuenta</a></li>
                            <li className="divider" tabIndex="-1"></li>
                            <li><a href="#!">Cerrar sesión</a></li>
                        </ul>
                    </ul>
                </div>
            </nav>

            <div className="row">

            <div className="conteiner">
                    <div className="col s4">
                        <img heigth="auto" width="350px" src="/image/un.svg" alt="xdxdxd" />
                    </div>

                    <div className="col s8">
                        <div className="card-panel">
                            <p className="teal-tex accent-2">Productos de la semana</p>
                        </div>
                    </div>
                
                </div>

                <div className="col s8">
                    
                    <div className="col s3 ">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="/image/ba.png" alt="xdxdd"/>
                            </div>
                            <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="/image/ba.png" alt="xdxdd"/>
                            </div>
                            <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="/image/ba.png" alt="xdxdd"/>
                            </div>
                            <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col s3">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src="/image/ba.png" alt="xdxdd"/>
                            </div>
                            <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                            </div>
                            <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="col s3">
                    <p>cascascsc</p>
                </div>

            </div>
          
          
        <style jsx>
            { styles }
        </style>
        </>

    )

}