import Link from 'next/link';
import styles from './styles/productAndPhone'

export default function Accesorios({ headset }) {
    return (
        <>
            <section className="products-laptop">
                    <h5>Laptops</h5>
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
                                        <button className='btn indigo darken-1'>
                                            <i className="material-icons">shopping_cart</i>
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