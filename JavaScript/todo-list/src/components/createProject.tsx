import { useState } from "react";
import { IProject } from "../interfaces/IProject";
import sytles from "../styles/input.module.css"

interface IProps {
    createProject: (proj: IProject) => void,
    dynamicProjectList: IProject[]
}

export default function CreateProject({createProject, dynamicProjectList}: IProps) {

    const [inputProjectName, setInputProjectName] = useState("")

    function updateTextBox(event:  React.FormEvent<HTMLInputElement>){
        setInputProjectName(event.currentTarget.value)
    }

    function onClickAddProject(){
        createProject({name: inputProjectName, items: []})
    }

    return (
        <div>
            <span>Create Project</span>
            <label htmlFor="projectNameInput">Name:</label>
            <input id="projectNameInput" type="text" value={inputProjectName} onChange={(event) => updateTextBox(event)}></input>
            <button className={sytles.addBtn} onClick={() => onClickAddProject()}>Add</button>
        </div>
    )
}