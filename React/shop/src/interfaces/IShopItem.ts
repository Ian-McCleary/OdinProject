interface IRating {
    rate: number;
    count: number;
}

interface IShopItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating
}

export default IShopItem