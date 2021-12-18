import css from 'styled-jsx/css'

export default css`
.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0 1rem;
}

.products-laptop, .products-phone {
    width: 90%;
    margin: 0 auto;
}


.card-action {
    display: flex;
    gap: 0 0.5rem;
    align-items: center;
}

.card-action button i {
    pointer-events: none;
}

`