import Link from 'next/link';
import styles from './styles/productAndPhone'

export default function PhoneAndLaptops({ phone, laptop }) {
    function addToCart(e) {
        console.log(e.target)
        console.log(e.target.dataset.name)
        const product = laptop.find(product => product.name === e.target.dataset.name)
        console.log(product)
        localStorage.setItem('product', JSON.stringify(product))
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
                                        <button className='btn indigo darken-1' data-name={product.name} onClick={addToCart}>
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
                <section className="products-phone">
                    <h5>Laptops</h5>
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