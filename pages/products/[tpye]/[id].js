import Head from 'next/head'
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';

import styles from '../../../styles/productDescription'

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function XD() {
    const params = useRouter();

    useEffect(() => {
        const id = params.query;
        console.log(id);
    }, [params]);
    
    return <>
        <Head>
            <title>Producto {params.id}</title>
        </Head>
        <main className='main'>
            <section className="details">
                <section className="product">
                    <div className="article">
                        <img src="https://i.blogs.es/97812d/poco-f3-pro-00-01/450_1000.jpg" alt="Poco x3 Pro GOD" />
                        <h1>Poco x3 Pro GOD</h1>
                    </div>
                </section>
            </section>
            {
                params.query.type === 'phone' && <Phone />
            }
            <section className="similares">
                <h3>Dispositivos similares</h3>
                <div className="card-list">
                    <Link href="/">
                        <a className="card-item">
                            <div className="card-img">
                                <img src="/images/sugerencia.png" alt="Poco x3 Pro GOD" />
                            </div>
                            <div className="card-description">
                                <h6>Poco x3 NFC</h6>
                                <ul>
                                    <li>
                                        <i>
                                            <img src="/images/procesador.svg" alt="procesador image" />
                                        </i>
                                            SnapDragon 732G
                                    </li>
                                    <li>
                                        <i>
                                            <img src="/images/bateria.svg" alt="procesador image" />
                                        </i>
                                            5160mAh
                                    </li>
                                    <li>
                                        <i>
                                            <img src="/images/memory.svg" alt="procesador image" />
                                        </i>
                                            64gb / 128gb
                                    </li>
                                    <li>
                                        <i>
                                            <img src="/images/money.svg" alt="procesador image" />
                                        </i>
                                            245$
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </Link>
                </div>
            </section>
        </main>
        <style jsx>
            {styles}
        </style>
    </>
}

function Phone() {
    return (
    <>
        <section className='description-product'>
            <div className="product-name">
                <h3>Descripci??n</h3>
            </div>
            <ul className="list-info">
                <li className='list-info-item'><i className="material-icons">
                        memory
                    </i> CPU: SnapDragon 860
                </li>

                <li className='list-info-item'><i className="material-icons">
                        developer_board
                    </i> GPU: Adreno 640
                </li>

                <li className='list-info-item'><i className="material-icons">
                        battery_full 
                    </i> Bater??a: 5160mAh
                </li>
                
                <li className='list-info-item'><i className="material-icons">
                        storage 
                    </i> Memoria: 128gb / 256gb
                </li>
                
                <li className='list-info-item'><i className="material-icons">
                        camera_rear
                    </i> Camara Trasera: 48MP + 8MP + 2MP + 2MP
                </li>
                
                <li className='list-info-item'><i className="material-icons">
                        camera_front
                    </i> Camara Frontal: 20MP
                </li>
                
                <li className='list-info-item'><i className="material-icons">
                        attach_money
                    </i> Precio: 285$ / 310$
                </li>

            </ul>
            <div align='center'>
            <Link href="/">
                <a className="btn indigo darken-4 btn-buy">
                    <i className="material-icons">
                        shopping_cart
                    </i>
                        Comprar
                </a>
            </Link>
            </div>
        </section>
        
        <style jsx>
            {styles}
        </style>
    </>
    )
}

function Laptop({data}) {
    return (
    <>
        <section className='description-product'>
            <div className="product-name">
                <h3>Descripci??n</h3>
            </div>
            <ul className="list-info">
                <li className='list-info-item'><i className="material-icons">memory</i>
                    CPU: {data.cpu}
                </li>

                <li className='list-info-item'><i className="material-icons">
                        developer_board
                    </i> GPU: {data.gpu}
                </li>
                <li className='list-info-item'><i className="material-icons">
                        storage 
                    </i> Memoria: { data.memory }
                </li>
                <li className='list-info-item'><i className="material-icons">
                        camera_front
                    </i> Camara Frontal: { data.camara_frontal }
                </li>
                
                <li className='list-info-item'><i className="material-icons">
                        attach_money
                    </i> Precio: { data.price }
                </li>

            </ul>
            <div align='center'>
            <Link href="/">
                <a className="btn indigo darken-4 btn-buy">
                    <i className="material-icons">
                        shopping_cart
                    </i>
                        Comprar
                </a>
            </Link>
            </div>
        </section>
        
        <style jsx>
            {styles}
        </style>
    </>
    )
}
