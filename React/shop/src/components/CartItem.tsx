import IShopItem from "../interfaces/IShopItem"
import { ICartItem } from "../interfaces/ICart"
import styles from "../styles/cart.module.css"

interface IProps {
    item: ICartItem;
}

export default function CartItem({item}: IProps) {
    console.log(item.product.image)
    return (
        <div className={styles.cartItem}>
            <div className={styles.cartItemImage} style={{backgroundImage: "url(" + item.product.image + ")"}}></div>
            <div className={styles.cart}>{item.product.title}</div>
            <div className={styles.cartItemQuantity}>Qty: {item.quantity}</div>
        </div>
    )
}