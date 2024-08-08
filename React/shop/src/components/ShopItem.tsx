import { ChangeEvent, useEffect, useState } from "react";
import IShopItem from "../interfaces/IShopItem";
import styles from "../styles/items.module.css"

import getShopItemFromUrl from "../services/GetItemService"

interface IProps {
    url: string;
    addToCart: (item: IShopItem | undefined, count: number) => void;
}

export default function ShopItem({ url, addToCart }: IProps) {

    const [itemData, setItemData] = useState<IShopItem>();
    const [inputQuantity, setInputQuantity] = useState(1)

    useEffect(() => {
        getItem()
    }, []);
    /** Call api to get the input item for the url */
    async function getItem() {
        setItemData(await getShopItemFromUrl(url))
    }

    /**Add item to cart when user clicks add to cart */
    function addItemsToCart(quantity: number){
        addToCart(itemData, quantity)
    }

    /**Update react input quantity when the user changes quantity box */
    function updateInputQuantity(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value == "") {
            return
        }
        setInputQuantity(parseInt(event.target.value))
    }

    

    if (itemData == null){
        return <div></div>
    }

    const prevPrice = (itemData.price * 1.15).toFixed(2)

    return (
        <div className={styles.shopItemContainer}>
            <div className={styles.shopItemImage} style={{backgroundImage: 'url(' + itemData.image + ')'}}></div>
            <div className={styles.shopItemTitle}>{itemData.title}</div>
            <div className={styles.shopItemDescription}>{itemData.description.substring(0, 300) + "..."}</div>
            <div className={styles.shopPriceContainer}>
                <div className={styles.previousPrice}>
                    <s>${prevPrice}</s>
                </div> 
                <div className={styles.newPrice}>
                    ${itemData.price}
                </div> 
            </div>
            <div className={styles.shopItemCartButtons}>
                <div className={styles.quantityLabel}>Qty:</div>
                <input className={styles.quantityInput} type="number" placeholder="1" value={inputQuantity} onChange={(event) => updateInputQuantity(event)}></input>
                <button className={styles.addToCartButton} onClick={() => addItemsToCart(inputQuantity)}>Add to Cart</button>
            </div>
        </div>
    )
}