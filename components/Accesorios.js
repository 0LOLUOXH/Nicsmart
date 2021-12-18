import Link from 'next/link';
import styles from './styles/productAndPhone'
import ProductContext from './Context';
import { useContext } from 'react';

export default function Accesorios({ headset }) {
    const {products, setProducts} = useContext(ProductContext);

    function addToCartHeadset(e) {
        const product = products.getHeadsets.find(item => item.name === e.target.dataset.name);
        // const getProducts = JSON.parse(localStorage.getItem('products')) || []
        const update = {
            ...products,
            getHeadsets: products.getHeadsets.map(item => {
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
                    <h5>Audifonos</h5>
                    <section className="products">
                        {
                            headset.map(product => (
                                <div className="card" key={product.name}>
                                    <div className="card-image">
                                        <img width="350px" src={`${product.image}`} alt="Poco x3 Pro GOD" />
                                        <span class="card-title">{product.name}</span>
                                    </div>
                                    <div className="card-content">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="card-action">
                                        <button className='btn indigo darken-1' data-name={product.name} onClick={addToCartHeadset}>
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