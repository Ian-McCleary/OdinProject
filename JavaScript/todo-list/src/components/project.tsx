import { useState } from "react";
import styles from "../styles/mainContainer.module.css"

import { IProject } from "../interfaces/IProject";
import ToDoItem from "./toDoItem";

export default function Project({name, items}: IProject) {
    const [isUIOpen, setIsUIOpen] = useState(false)


    return (
        <div className={styles.project}>
            <div className={styles.projectTitle}>{name}</div>
            <div className={styles.toDoList}>
                {items.map((val, idx) => <ToDoItem key={idx} name={val.name} description={val.description} isComplete={val.isComplete}></ToDoItem>)}
            </div>
        </div>
    )
}