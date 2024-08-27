
import CartItem from "./CartItem"
import IShopItem from "../interfaces/IShopItem"
import styels from "../styles/cart.module.css"
import { ICart } from "../interfaces/ICart";


interface IProps {
    currentCart: ICart
}

export default function Cart({ currentCart }: IProps) {
    let currentCartItems = currentCart.products.map((i) => <CartItem key={i.product.id} item={i}></CartItem>)

    /** Cart total amount */
    const sum = () => {
        return currentCart.products.reduce((total, current) => total + (current.quantity * current.product.price), 0).toFixed(2)
    }

    return (
        <div className={styels.cartContainer}>
            <div className={styels.cartTitle}>Cart</div>
            {currentCartItems}
            <div className={styels.total}>
                Total: ${sum()}
            </div>
        </div>
    )
}