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

.description-product {
    padding: .75rem;
    box-shadow: var(--shadow-1);
    color: #eee;
    background-image: var(--blue-gradient);
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

`
