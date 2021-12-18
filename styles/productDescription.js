import css from 'styled-jsx/css'

export default css`
.main {
    width: 90%;
    margin: 40px auto;
    padding: 1.2rem;
}

.details {
    border-radius: .25rem;
}

.article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.article h1 {
    background-color: rgb(148 148 148 / 50%);
    padding: 1.5rem;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 2rem;
    transition: transform .2s ease-in-out;
}

.article h1:hover {
    transform: scale(1.05);
}

.article img {
    width: 80%;
}

.description-product {
    padding: .75rem;
    box-shadow: var(--shadow-1);
    color: #eee;
    background-color: #26a69a;
    border-radius: .5rem;
    
}

.list-info-item {
    border-bottom: 1px solid rgba(255,255,255,.5);
}

.list-info-item + .list-info-item {
    margin-top: 1.25rem
}

.btn-buy i {
    vertical-align: middle;
    margin-right: .5rem;
}

.card-item {
    display: block;
    color: #000;
    box-shadow: var(--shadow-1);
    border-radius: .5rem;
    overflow: hidden;
    transition: transform .3s;
}

.card-item:hover {
    transform: scale(1.05);
}

.card-img {
    height: 14rem;
}

.card-img img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.card-description {
    padding: 1.5rem;
}

.card-description i {
    vertical-align: middle;
    margin-right: .5rem;
}

.test{
    margin-bottom: 200px;
}

@media screen and (min-width: 1024px) {
    .details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }
}
`
