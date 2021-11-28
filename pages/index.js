
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

            <nav class="indigo darken-4">
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo center">Logo</a>
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

                <div class="col s9">

                </div>

                <div class="col s3">
                <div class="carousel">
                    <a class="carousel-item" href="#one!"><div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="images/office.jpg"/>
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div></a>
                    <a class="carousel-item" href="#two!"><img src="#"/></a>
                    <a class="carousel-item" href="#three!"><img src="#"/></a>
                    <a class="carousel-item" href="#four!"><img src="#"/></a>
                    <a class="carousel-item" href="#five!"><img src="#"/></a>
                </div>
                </div>

            </div>
            
        </>

    )

}