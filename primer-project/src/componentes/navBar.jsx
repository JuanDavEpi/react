import CartWidget from './CartWidget';
import './componentes.css'
export default function NavBar() {
    return <>
    <nav>
        <img src='./X-Logo.png'/>
        <a>Home</a>
        <a>Products</a>
        <a>Discounts</a>
        <CartWidget />
    </nav>
    </>;
}