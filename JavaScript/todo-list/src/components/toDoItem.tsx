import { IListItem } from "../interfaces/IProject";
import styles from "../styles/listItem.module.css"

export default function ToDoItem({name, description, isComplete}: IListItem) {

    return (
        <div>
            <div className={styles.itemName}>{name}</div>
            <div className={styles.itemDescription}>{description}</div>
            <div>Is complete: {isComplete.toString()}</div>
        </div>
    )
    
}