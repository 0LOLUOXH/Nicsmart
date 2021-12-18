import { useState, useEffect, createContext } from 'react'
import { useQuery, gql } from '@apollo/client';

const ProductContext = createContext({})

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

function ProductContextProvider({ children, initialState = {} }) {
    const [products, setProducts] = useState(initialState)
    const {loading, data, error} = useQuery(GET_PRODUCTS);
    
    useEffect(() => {
        if (initialState) {
            setProducts(initialState)
        }
    }, [])
    
    useEffect(() => {
        if(!loading) {
            let info = JSON.stringify(data)
            info = JSON.parse(info)
            const infoStorage = JSON.parse(localStorage.getItem('products')) || false
            for(let key in info) {
                for(const [i, value] of info[key].entries()) {
                    if(infoStorage && infoStorage[key][i].inCart) {
                        info[key][i] = {...value, inCart: true}
                    } else {
                        info[key][i] = {...value, inCart: false}
                    }
                }
            }
            localStorage.setItem('products', JSON.stringify(info))
            setProducts(info)
        }
    }, [loading])

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContextProvider }
export default ProductContext
