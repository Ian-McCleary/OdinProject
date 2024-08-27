import { useState } from "react";
import { IListItem } from "../interfaces/IProject";
import styles from "../styles/listItem.module.css"

interface IProps extends IListItem {
    deleteToDo: (listItem: IListItem) => void
}

export default function ToDoItem({name, description, isComplete, deleteToDo}: IProps) {

    const [hasCompleted, setHasCompleted] = useState(isComplete)

    function updateCompleted() {
        setHasCompleted(!hasCompleted)
    }

    return (
        <div className={styles.toDoItem}>
            <div className={styles.toDoContent}>
                <div className={styles.itemName}>{name}</div>
                <div className={styles.itemDescription}>{description}</div>
                <div className={styles.checkBoxContainer}>
                    <label htmlFor={name}>Done</label>
                    <input className={styles.toDoCheckbox} id={name} type="checkbox" checked={hasCompleted} onChange={() =>updateCompleted()}></input>
                    <button className={styles.deleteButton} onClick={() => deleteToDo({name, description, isComplete})}>Delete</button>
                </div>
            </div>
        </div>
    )
    
}