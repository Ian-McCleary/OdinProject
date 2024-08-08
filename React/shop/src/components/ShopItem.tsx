import { useEffect, useState } from "react";
import IShopItem from "../interfaces/IShopItem";
import styles from "../styles/items.module.css"

import getShopItemFromUrl from "../services/GetItemService"

interface IProps {
    url: string;
    addToCart: (item: IShopItem | undefined, count: number) => void;
}

export default function ShopItem({ url, addToCart }: IProps) {

    const [itemData, setItemData] = useState<IShopItem>();

    useEffect(() => {
        getItem()
    }, []);
    /** Call api to get the input item for the url */
    async function getItem() {
        setItemData(await getShopItemFromUrl(url))
    }

    function addItemsToCart(quantity: number){
        console.log(itemData?.id)
        addToCart(itemData, quantity)
    }

    if (itemData == null){
        return <div></div>
    }

    return (
        <div className={styles.shopItemContainer}>
            <div className={styles.shopItemImage} style={{backgroundImage: 'url(' + itemData.image + ')'}}></div>
            <div className={styles.shopItemTitle}>{itemData.title}</div>
            <div className={styles.shopItemDescription}>{itemData.description.substring(0, 300) + "..."}</div>
            <div className={styles.shopItemCartButtons}>
                <div className={styles.quantityLabel}>Qty:</div>
                <input className={styles.quantityInput} type="number" placeholder="1"></input>
                <button className={styles.addToCartButton} onClick={() => addItemsToCart(1)}>Add to Cart</button>
            </div>
        </div>
    )
}