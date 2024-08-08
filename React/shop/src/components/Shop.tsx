import Cart from "./Cart"
import ShopItem from "./ShopItem"
import { ICart, ICartItem } from "../interfaces/ICart"
import IShopItem from "../interfaces/IShopItem"
import styles from "../styles/shop.module.css"
import { useState } from "react"

export default function Shop() {
    let newCart: ICart = {
        id: 1234,
        userId: 1234,
        date: "today",
        products: []

    }
    const [currentCart, setCurrentCart] = useState<ICart>(newCart)
    // create list of items 0 through 20 for test API item ids
    let itemNumbers: number[] = [];
    for (let i = 1; i < 21; i++){
        itemNumbers.push(i)
    }

    function addToCart(item: IShopItem | undefined, count: number){
        // dont update if for some reason item never got created from API
        if (item == null){
            return
        }
        console.log(currentCart.products)
        // check if this item is already in the cart and add quantity if so
        for (let i = 0; i < currentCart.products.length; i++) {
            // found item in card with same id
            if (currentCart.products[i].product.id == item.id) {
                // create new product list with updated quantity for item with same id
                let newProducts = [...currentCart.products];
                // update quantity
                newProducts[i].quantity += count;
                // create new cart and set products.
                let newCart = {...currentCart,
                    products: newProducts
                }
                setCurrentCart(newCart)
                return
            }
        }

        // item is not in cart and needs to be added
        let newProduct: ICartItem = {
            product: item,
            quantity: count
        }
        // add current item to list of products in cart
        let newProducts = [...currentCart.products, newProduct]
        // update cart product list
        let newCart = {...currentCart,
            products: newProducts
        }
        setCurrentCart(newCart)
    }

    return (
        <div className={styles.shopContainer}>
            <div className={styles.itemGrid}>
                {itemNumbers.map((i) => <ShopItem url={"https://fakestoreapi.com/products/" + i} addToCart={addToCart}></ShopItem>)}
            </div>
            <Cart currentCart={currentCart}></Cart>
        </div>
    )
}