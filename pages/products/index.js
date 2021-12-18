import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';
import styles from '../../styles/products'
import { useQuery, gql } from '@apollo/client';
import PhoneAndLaptops from '../../components/PhoneAndLaptop';
import Components from '../../components/Components';
import Accesorios from '../../components/Accesorios';
import productContext from '../../components/Context';

const GET_PRODUCTS = gql`
    query {
        getPhones {
            name,
            description,
            image,
            price
        },
        getLaptops {
            name,
            description,
            image,
            price
        },
        getCpus {
            name,
            description,
            image,
            price
        },
        getGpus {
            name,
            description,
            image,
            price
        },
        getMemories {
            name,
            description,
            image,
            price
        },
        getHeadsets {
            name,
            description,
            image,
            price
        }
    }
`

export default function Products() {
    // const {loading, data: products} = useQuery(GET_PRODUCTS);
    
    const initalState = {
        devices: {
            title: 'Dispositivos',
            description: 'Encontraras los mejores dispositivos',
            active: false,
        },
        components: {
            title: 'Componentes',
            description: 'Encontraras los mejores componentes',
            active: false,
        },
        accesorios: {
            title: 'Accesorios',
            description: 'Encontraras los mejores accesorios',
            active: false,
        }
    }
    
    const [option, setOption] = useState(initalState);
    // useContext
    const { products } = useContext(productContext);
    console.log(products)
    // const { loading, error, data } = useQuery(GET_PRODUCTS);

    function findActive() {
        let active = Object.keys(option).find(key => option[key].active === true);
        return option[active];
    }

    function updateOption(field) {
        setOption({
            ...initalState,
            [field]: {
                ...initalState[field],
                active: true,
            }
        });
    }
    
    function showDevices(e) {
        updateOption('devices');
    }

    function showComponents(e) {
        updateOption('components');
    }

    function showAccesorios(e) {
        updateOption('accesorios');
    }

    useEffect(() => {
        updateOption('devices');
    }, []);
    // console.log(loading);
    // console.log(products);
    return (
        <>
        <Head>
            <title>Cátalogo | Nicsmart</title>
        </Head>
            <section className='catalogo'>
                <header className="header-catalogo">
                    <div className="header-catalogo_container">
                        <div className={`devices ${option.devices.active && 'active'}`} onClick={showDevices}>
                            <p>Dispositivos</p>
                        </div>
                        <div className={`components ${option.components.active && 'active'}`} onClick={showComponents}>
                            <p>Componentes</p>
                        </div>
                        <div className={`accesorios ${option.accesorios.active && 'active'}`} onClick={showAccesorios}>
                            <p>Accesorios</p>
                        </div>
                    </div>
                </header>

                <article className="intro">
                    <h1 className='intro-title'>
                        Catalogo de {findActive() ? findActive().title : '....'}
                    </h1>
                    <h3 className='intro-info'>
                        {findActive() ? findActive().description : '....'}
                    </h3>
                </article>
                { option.devices.active && Object.keys(products).length > 0 && <PhoneAndLaptops phone={products.getPhones} laptop={products.getLaptops} /> }
                { option.components.active && Object.keys(products).length > 0 && <Components gpu={products.getGpus} cpu={products.getCpus} memory={products.getMemories} /> }
                { option.accesorios.active && Object.keys(products).length > 0 && <Accesorios headset={products.getHeadsets} /> }
            </section>
            <style jsx>
                { styles}
            </style>
        </>
    )
}
