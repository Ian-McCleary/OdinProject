import { useState } from "react";
import styles from "../styles/mainContainer.module.css"

import { IListItem, IProject } from "../interfaces/IProject";
import ToDoItem from "./toDoItem";

interface IProps extends IProject {
    deleteToDo: (listItem: IListItem) => void
}

export default function Project({name, items, deleteToDo}: IProps) {
    const [isUIOpen, setIsUIOpen] = useState(false)

    function onClickToggleProject(){
        setIsUIOpen(!isUIOpen)
    }


    return (
        <div className={styles.project}>
            <button className={styles.projectTitle} onClick={() => onClickToggleProject()}>{name}</button>
            
            {isUIOpen && 
                <div className={styles.toDoList}>
                    {items.map((val, idx) => <ToDoItem key={idx} name={val.name} description={val.description} isComplete={val.isComplete} deleteToDo={deleteToDo}></ToDoItem>)}
                </div>
            }
            
        </div>
    )
}