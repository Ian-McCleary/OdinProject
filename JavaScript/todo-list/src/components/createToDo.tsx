import { useState } from "react";
import { IListItem, IProject } from "../interfaces/IProject";
import styles from "../styles/input.module.css"

interface IProps {
    createToDo: (toDoItem: IListItem, projectName: string) => void,
    dynamicProjectList: IProject[],
}

export default function CreateToDo({createToDo, dynamicProjectList}: IProps) {

    const [inputToDoName, setInputToDoName] = useState("")
    const [inputToDoDescription, setInputToDoDescription] = useState("")
    const [inputToDoIsComplete, setInputToDoIsComplete] = useState(false)
    const [inputProjectName, setInputProjectName] = useState(dynamicProjectList[0].name)

    function updateNameTextBox(event:  React.FormEvent<HTMLInputElement>){
        setInputToDoName(event.currentTarget.value)
    }

    function updateDescriptionTextBox(event: React.FormEvent<HTMLInputElement>) {
        setInputToDoDescription(event.currentTarget.value)
    }

    function updateIsCompleteCheckBox(event: React.FormEvent<HTMLInputElement>) {
        setInputToDoIsComplete(!inputToDoIsComplete)
    }

    function updateSelectedProject(event: React.FormEvent<HTMLSelectElement>) {
        setInputProjectName(event.currentTarget.value)
    }

    function onClickAddToDo(){
        createToDo({name: inputToDoName, description: inputToDoDescription, isComplete: inputToDoIsComplete}, inputProjectName)
    }

    

    return (
        <div>
            <span>Create Task:</span>
            <label htmlFor="toDoProjectOption">Name:</label>
            <select name="project name" id="toDoProjectOption" onChange={(event) => updateSelectedProject(event)}>
                {dynamicProjectList.map(value => <option key={value.name} value={value.name} >{value.name}</option>)}
            </select>
            <label htmlFor="toDoNameInput">Name:</label>
            <input id="toDoNameInput" type="text" value={inputToDoName} onChange={(event) => updateNameTextBox(event)}></input>
            <label htmlFor="toDoDescriptionInput">Description:</label>
            <input id="toDoDescriptionInput" type="text" value={inputToDoDescription} onChange={(event) => updateDescriptionTextBox(event)}></input>
            <label htmlFor="toDoIsCompleteCheckBox">Is Complete?:</label>
            <input className={styles.checkBox} id="toDoIsCompleteCheckBox" type="checkbox" checked={inputToDoIsComplete} onChange={(event) => updateIsCompleteCheckBox(event)}></input>
            <button className={styles.addBtn} onClick={() => onClickAddToDo()}>Add</button>
        </div>
    )
}