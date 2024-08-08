
import IShopItem from "../interfaces/IShopItem"

const getShopItemFromUrl = async (url: string): Promise<IShopItem> => {
    return fetch(url)
    .then(res => res.json())
    .then(res => {return res as IShopItem})
}

export default getShopItemFromUrl