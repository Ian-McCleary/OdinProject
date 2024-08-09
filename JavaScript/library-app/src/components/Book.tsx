import styles from "../styles/library.module.css"
import { IBook } from "../interfaces/IBook"
import { useState } from "react"


export default function Book({ title, pages, hasRead, removeBook}: IBook) {

    const [currentBook, setCurrentBook] = useState<IBook>({title: title, pages: pages, hasRead: hasRead, removeBook: removeBook});

    function readBook() {
        console.log("clicked readbook")
        let newBook = {...currentBook, hasRead: true}
        console.log(newBook)
        setCurrentBook(newBook)
        console.log(currentBook)
    }

    return (
        <div className={styles.bookContainer}>
            <div className="">{currentBook.title}</div>
            <div className="">{currentBook.pages}</div>
            <div className="">{String(currentBook.hasRead)}</div>
            <button className="" onClick={() => currentBook.removeBook()}>Remove</button>
            <button className="" onClick={() => readBook()}>Read</button>
        </div>
    )
}