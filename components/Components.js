import Link from 'next/link';
import styles from './styles/productAndPhone'

export default function Components({ cpu, gpu, memory}) {
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