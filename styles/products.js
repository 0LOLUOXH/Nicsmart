import css from 'styled-jsx/css'

export default css`
    .catalogo {
        margin-top: 2rem;
    }

    .header-catalogo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .header-catalogo_container {
        display: inline-flex;
        border-radius: 1.25rem;
        overflow: hidden;
    }

    .devices, .components, .accesorios {
        padding: 0.25rem .5rem;
        background-color: #f5f5f5;
        transition: background-color .2s;
        cursor: pointer;
    }

    .devices.active, .components.active, .accesorios.active {
        color: #fff;
        background-color: #09f;
    }

    .devices:hover, .components:hover, .accesorios:hover {
        color: #fff;
        background-color: #09f;
    }
    .devices > p, .components > p, .accesorios > p {
        pointer-events: none;
    }

    .intro-title {
        font-size: 2rem;
    }

    .intro-info {
        font-size: 1.2rem;
    }
`
