import { useState } from "react"
import { IBook } from "../interfaces/IBook"
import Book from "./Book"
import styles from "../styles/library.module.css"


export function Library() {
    
    const [bookList, setBookList] = useState<IBook[]>([])
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredPages, setEnteredPages] = useState(0)

    /** add new book to library using user entered inputs */
    function addBook(){
        let cTitle = enteredTitle.slice(0, enteredTitle.length)
        let book:IBook = {
            title: cTitle,
            pages: enteredPages,
            hasRead: false,
        };
        setBookList([...bookList,book]);
    }

    /** remove book from library */
    function removeBook(bookTitle: string){
        //let newList = bookList.filter(item => item.title !== book.title)
        console.log(bookTitle)
        setBookList(bookList.filter(item => item.title !== bookTitle))
        console.log(bookList)
    }   

    /** update title from input */
    function updateTitle(event: React.ChangeEvent<HTMLInputElement>){
        setEnteredTitle(event.target.value)
    }

    /** update page count from input */
    function updatePageCount(event: React.ChangeEvent<HTMLInputElement>){
        if (event.target.value == ""){
            return
        }

        setEnteredPages(parseInt(event.target.value))
    }

    
    return (
        <div className={styles.libraryContainer}>
            <div className={styles.libraryTitle}>Basic JS Library</div>
            <div className={styles.addBookForm}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" onChange={(event) => updateTitle(event)} value={enteredTitle}></input>
                </div>
                <div>
                    <label htmlFor="pages">Pages:</label>
                    <input type="number" onChange={(event) => updatePageCount(event)} value={enteredPages}></input>
                </div>
                <button className={styles.createBookButton} onClick={() => addBook()}>Add Book</button>
            </div>
            <div className={styles.bookGrid}>
                {bookList.map((i) => <Book key={i.title} title={i.title} pages={i.pages} hasRead={i.hasRead} removeBook={removeBook}></Book>)}
            </div>
        </div>
    )
}