
import CartItem from "./CartItem"
import IShopItem from "../interfaces/IShopItem"
import styels from "../styles/cart.module.css"
import { ICart } from "../interfaces/ICart";


interface IProps {
    currentCart: ICart
}

export default function Cart({ currentCart }: IProps) {
    let currentCartItems = currentCart.products.map((i) => <CartItem item={i}></CartItem>)

    return (
        <div className={styels.cartContainer}>
            <div className={styels.cartTitle}>Cart</div>
            {currentCartItems}
        </div>
    )
}