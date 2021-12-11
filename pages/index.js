import style from "../styles/styles.js"
export default function Home(){

    return (
        <>

            <div class="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">shopping_cart</i>
                </a>
                <ul>
                    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div>

            <nav class=" blue-grey darken-4">
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo center"><img height="35px" src="/image/lo.png" alt="xdxdd" /></a>
                    <ul class="left hide-on-med-and-down">
                        <li><a href="#">Promociones</a></li>
                        <li><a href="#">Productos</a></li>
                        <li class="active"><a href="#">Marcas</a></li>

                        <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Cuenta</a>
                        <ul id='dropdown1' class='dropdown-content'>
                            <li><a href="#!">Iniciar de sesión</a></li>
                            <li><a href="#!">Crear cuenta</a></li>
                            <li class="divider" tabindex="-1"></li>
                            <li><a href="#!">Cerrar sesión</a></li>
                        </ul>
                    </ul>
                </div>
            </nav>

            <div class="row">

            <div class="conteiner" class="pink accent-3">
                    <div class="col s4">
                        <img heigth="auto" width="350px" src="/image/un.svg" alt="xdxdxd" />
                    </div>

                    <div class="col s8">
                        <div class="card-panel">
                            <p class="teal-tex accent-2">Smartphones de la semana</p>
                        </div>
                    </div>
                
                </div>

                <div class="col s8">
                    
                    <div class="col s4 ">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="https://i.blogs.es/97812d/poco-f3-pro-00-01/450_1000.jpg" alt="xdxdd"/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Poco X3 Pro<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">Añadir al carro</a></p>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Poco X3 Pro<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>
                    </div>

                    <div class="col s4">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/07/Google-Pixel-6-Portfolio-Shot-scaled.jpg" alt="xdxdd"/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Google Pixel 6 Pro<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">Añadir al carro</a></p>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Google Pixel 6 Pro<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>
                    </div>

                    <div class="col s4">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="https://i.blogs.es/ebed1b/analisis-iphone-13-pro-iphone-13-pro-max-applesfera-05/450_1000.jpeg" alt="xdxdd"/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Iphone 13 Pro<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">Añadir al carro</a></p>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Iphone 13 Pro<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>
                    </div>

                    <div class="col s4">
                        <div class="card">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="https://www.tuexperto.com/wp-content/uploads/2021/05/poco-f3-analisis-review-opiniones-5-1200x640.jpg" alt="xdxdd"/>
                            </div>
                            <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Poco F3<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">Añadir al carro</a></p>
                            </div>
                            <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Poco F3<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="col s3">
                    <p>cascascsc</p>
                </div>

            </div>
          
          
            

        </>

    )

}