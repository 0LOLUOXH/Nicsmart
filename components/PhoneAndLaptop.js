import Link from 'next/link';
import styles from './styles/productAndPhone'
import { useContext } from 'react';
import ProductContext from './Context';

export default function PhoneAndLaptops({ phone, laptop }) {
    const {products, setProducts} = useContext(ProductContext);
    
    function addToCartLaptop(e) {
        const product = products.getLaptops.find(item => item.name === e.target.dataset.name);
        // const getProducts = JSON.parse(localStorage.getItem('products')) || []
        const update = {
            ...products,
            getLaptops: products.getLaptops.map(item => {
                if(item.name === e.target.dataset.name) {
                    return {...item, inCart: product.inCart ? false : true}
                }
                return item
            })
        }
        setProducts(update);
        localStorage.setItem('products', JSON.stringify(update))

    }

    function addToCartPhone(e) {
        const product = products.getPhones.find(item => item.name === e.target.dataset.name);
        // const getProducts = JSON.parse(localStorage.getItem('products')) || []
        const update = {
            ...products,
            getPhones: products.getPhones.map(item => {
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
                    <h5>Laptops</h5>
                    <section className="products">
                        {
                            laptop.map(product => (
                                <div className="card" key={product.name}>
                                    <div className="card-image">
                                        <img width="350px" src={`${product.image}`} alt={product.name} />
                                        <span class="card-title">{product.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <button className='btn indigo darken-1' data-name={product.name} onClick={addToCartLaptop}>
                                        {
                                            product.inCart ? (
                                                <i className="material-icons">check</i>
                                                ) : (	
                                                <i className="material-icons">add_shopping_cart</i>
                                            )
                                        }
                                        </button>
                                        <Link href={`/products/laptop/${product.name}`}>
                                            <a>Mas info</a>
                                        </Link>11
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                </section>
                <section className="products-phone">
                    <h5>Dispositivos</h5>
                    <section className="products">
                        {
                            phone.map(product => (
                                <div className="card" key={product.name}>
                                    <div className="card-image">
                                        <img width="350px" src={`${product.image}`} alt="Poco x3 Pro GOD" />
                                        <span class="card-title">{product.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <button className='btn indigo darken-1' data-name={product.name} onClick={addToCartPhone}>
                                        {
                                            product.inCart ? (
                                                <i className="material-icons">check</i>
                                                ) : (	
                                                <i className="material-icons">add_shopping_cart</i>
                                            )
                                            }
                                        </button>
                                        <Link href={`/products/phone/${product.name}`}>
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