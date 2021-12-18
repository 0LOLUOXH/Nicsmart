import Link from 'next/link';
import styles from './styles/productAndPhone'
import ProductContext from './Context';
import { useContext } from 'react';

export default function Components({ cpu, gpu, memory}) {
    const {products, setProducts} = useContext(ProductContext);
    
    function addToCartGpu(e) {
        const product = products.getGpus.find(item => item.name === e.target.dataset.name);
        // const getProducts = JSON.parse(localStorage.getItem('products')) || []
        const update = {
            ...products,
            getGpus: products.getGpus.map(item => {
                if(item.name === e.target.dataset.name) {
                    return {...item, inCart: product.inCart ? false : true}
                }
                return item
            })
        }
        setProducts(update);
        localStorage.setItem('products', JSON.stringify(update))

    }
    function addToCartCpu(e) {
        const product = products.getCpus.find(item => item.name === e.target.dataset.name);
        // const getProducts = JSON.parse(localStorage.getItem('products')) || []
        const update = {
            ...products,
            getCpus: products.getCpus.map(item => {
                if(item.name === e.target.dataset.name) {
                    return {...item, inCart: product.inCart ? false : true}
                }
                return item
            })
        }
        setProducts(update);
        localStorage.setItem('products', JSON.stringify(update))

    }
    function addToCartMemories(e) {
        const product = products.getMemories.find(item => item.name === e.target.dataset.name);
        // const getProducts = JSON.parse(localStorage.getItem('products')) || []
        const update = {
            ...products,
            getMemories: products.getMemories.map(item => {
                if(item.name === e.target.dataset.name) {
                    return {...item, inCart: product.inCart ? false : true}
                }
                return item
            })
        }
        setProducts(update);
        localStorage.setItem('products', JSON.stringify(update))

    }


    return (
        <>
            <section className="products-laptop">
                    <h5>Graficas</h5>
                    <section className="products">
                        {
                            gpu.map(product => (
                                <div className="card" key={product.name}>
                                    <div className="card-image">
                                        <img width="350px" src={`${product.image}`} alt="Poco x3 Pro GOD" />
                                        <span class="card-title">{product.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <button className='btn indigo darken-1' data-name={product.name} onClick={addToCartGpu}>
                                        {
                                            product.inCart ? (
                                                <i className="material-icons">check</i>
                                                ) : (	
                                                <i className="material-icons">add_shopping_cart</i>
                                            )
                                            }
                                        </button>
                                        <Link href="/products/phone/a">
                                            <a>Mas info</a>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </section>
                <section className="products-phone">
                    <h5>CPU's</h5>
                    <section className="products">
                        {
                            cpu.map(product => (
                                <div className="card" key={product.name}>
                                    <div className="card-image">
                                        <img width="350px" src={`${product.image}`} alt="Poco x3 Pro GOD" />
                                        <span class="card-title">{product.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <button className='btn indigo darken-1' data-name={product.name} onClick={addToCartCpu}>
                                        {
                                            product.inCart ? (
                                                <i className="material-icons">check</i>
                                                ) : (	
                                                <i className="material-icons">add_shopping_cart</i>
                                            )
                                        }
                                        </button>
                                        <Link href="/products/phone/a">
                                            <a>Mas info</a>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </section>
                <section className="products-phone">
                    <h5>Memorias</h5>
                    <section className="products">
                        {
                            memory.map(product => (
                                <div className="card" key={product.name}>
                                    <div className="card-image">
                                        <img width="350px" src={`${product.image}`} alt="Poco x3 Pro GOD" />
                                        <span class="card-title">{product.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <button className='btn indigo darken-1' data-name={product.name} onClick={addToCartMemories}>
                                            {
                                                product.inCart ? (
                                                    <i className="material-icons">check</i>
                                                    ) : (	
                                                    <i className="material-icons">add_shopping_cart</i>
                                                )
                                            }
                                        </button>
                                        <Link href="/products/phone/a">
                                            <a>Mas info</a>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </section>

                <style jsx>
                    { styles}
                </style>
        </>
    )
}