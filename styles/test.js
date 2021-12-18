import css from 'styled-jsx/css'

export default css` 
    .logo-hero-mobile {
        display: none;
    }
    .container-home {
        width: 90%;
        margin: 0 auto;
    }

    .test{
        margin-top: 10rem;
    }

    .m
    {
        margin-top: 5%;
    }

    .m2
    {
        padding: 3% 0% 0% 5%;
    }

    .color_h2
    {
        font-weight: bold;
        color: #26a69a;
    }

    .simu_h2
    {
        margin-left: 3%;
        font-size: 42pt;
        font-weight: bold;
    }

    .simu2_h2
    {
        margin-left: 3%;
        font-size: 37pt;
        font-weight: bold;
    }

    .otro_h2
    {
        margin-left: 3%;
        color: #9F9F9F;
    }
   
    .caja
    {
        background: #263238;
        height: 230px;
        width: 350px;
        border-radius: 6%;
        margin: 30% 0% 0% 10%;
        padding: 7%;
    }

    .caja img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .box_m
    {
        margin-top: 5%;
        background: #eeeeee;
        border-radius: 2%;
    }

    .box_m2
    {
        height: 690px;
        margin-top: 2%;
        background: #eeeeee;
        border-radius: 2%;
    }

    .jut
    {
        padding-top: 5%;
        font-size: 5px;
        color: #fff;
    }
    
    .jut i {
        background: #007FFF;
        padding: .25rem;
        border-radius: 50%;
        overflow: hidden;
    }

    .boton
    {
        border-radius: 3%;
        text-decoration:none;
        font-size:20px;
        color:#ffffff;
        padding-top:20px;
        padding-bottom:20px;
        padding-left:40px;
        padding-right:40px;
        background-color:#26a69a;
        margin-top: .5rem;
        display: inline-block;
    }

    .boton i {
        vertical-align: middle;
    }

    .caja_soon
    {
        background: #fff;
        height: 150px;
        width: 370px;
        border-radius: 2%;
        margin: 30% 0% 0% 0%;
        padding: 10%;
    }

    .caja_soon2
    {
        background: #fff;
        height: 160px;
        border-radius: 2%;
        padding: 5%;
    }

    .caja_soon2 img
    {
        height: 110px;
        width: auto;
    }

    .caja_soon img
    {
        height: 100px;
        width: auto;
    }

    .opo
    {
        height: 355px;
        width: auto;
    }

    .op
    {
        margin: 14% 0% 0% 10%;
        height: 55px;
        width: auto;
    }

    .e_p
    {
        padding: 4% 0% 0% 12%;
        font-size: 15pt;
        color: #fff;
        
    }

    .title-v h2 {
        margin: 0;
    }

    .blue-title {
        color: #26a69a;
    }

    .title-v p {
        color: #9F9F9F;
    }

    .mini-cards h6 {
        font-weight: bold;
    }

    .mini-cards span {
        color: #9F9F9F;
    }

    .e_p2
    {
        padding-left:12%;
        font-size: 15pt;
        color: #fff;
        
    }

    i
    {
        vertical-align: middle;
    }

    .fot
    {
        height: 460px;
        margin: 0;
        margin-top: 5%;
        background: #263238;
    }

    @media screen and (max-width: 996px) {
        
        .logo-hero-mobile {
            border-radius: .75rem;
            display: block;
        }
        
        .logo-hero {
            display: flex;
            justify-content: center;
        }

        .mobile-hidden {
            display: none;
        }

        .test {
            width: 100%;
            text-align: center;
        }

        .title-v {
            text-align: center;
        }

        .caja_soon2 {
            display: flex;
            align-items: center;
        }

        .info-mini-card {
            display: flex;
            flex-direction: column;
        }

        .card-minis {
            width: 90vw;
            margin: 0 auto;
        }
        
        .fila-mobile {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .end-title h2 {
            font-size: 1.5rem;
        }

        .yellow-image img {
            max-width: 90vw;
            height: auto;
        }

        .simu_h2 {
            margin-left: 0;
        }

    }
    
`