export interface IBook {
    title: string;
    pages: number;
    hasRead: boolean;
    removeBook: () => void;
}