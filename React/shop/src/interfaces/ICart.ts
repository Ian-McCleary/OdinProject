import IShopItem from "./IShopItem";

export interface ICartItem {
    product: IShopItem;
    quantity: number;
}

export interface ICart {
    id: number;
    userId: number;
    date: string;
    products: ICartItem[]
}

