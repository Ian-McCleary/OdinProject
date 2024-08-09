import styles from "../styles/library.module.css"
import { IBook } from "../interfaces/IBook"
import { useState } from "react"

interface IProps extends IBook {
    removeBook: (title: string) => void
}

export default function Book({ title, pages, hasRead, removeBook}: IProps) {

    const [currentBook, setCurrentBook] = useState<IBook>({title: title, pages: pages, hasRead: hasRead});

    function readBook() {
        console.log("clicked readbook")
        let newBook = {...currentBook, hasRead: true}
        console.log(newBook)
        setCurrentBook(newBook)
        console.log(currentBook)
    }

    return (
        <div className={styles.bookContainer}>
            <div className={styles.bookTitle}>{currentBook.title}</div>
            <div className="">Pages: {currentBook.pages}</div>
            <div className="">Has read: {String(currentBook.hasRead)}</div>
            <button className="" onClick={() => removeBook(currentBook.title)}>Remove</button>
            <button className="" onClick={() => readBook()}>Read</button>
        </div>
    )
}