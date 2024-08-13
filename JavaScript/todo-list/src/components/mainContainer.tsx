import styles from "../styles/mainContainer.module.css"
import Project from "./project"
import { useEffect, useState } from "react"
import { IListItem, IProject } from "../interfaces/IProject"
import { listOfProjects } from "../constants/listOfProjects"
import CreateProject from "./createProject"
import CreateToDo from "./createToDo"

export default function MainContainer() {

    const [dynamicProjectList, setDynamicProjectList] = useState(listOfProjects)

    /** Create a project with the specified name */
    function createProject({name}:IProject){
        setDynamicProjectList(prev => [...prev,{name: name, items: []}])
    }

    /** Create a todo item under a project name */
    function createToDoItem({name, description, isComplete}: IListItem, projectName: string){
        setDynamicProjectList(prev => prev.map(value => {
            if (value.name == projectName) {
                value.items = [...value.items, {name, description, isComplete}]
            }
            return value
        }))
    }

    function deleteToDoItem({name, description, isComplete}: IListItem) {
        setDynamicProjectList(prev => prev.map(value => {
            value.items = value.items.filter((item) => (item.name !== name || item.description !== description))
            return value
        }))
    }


    return (
        <div>
            <div className={styles.siteTitle}>
                Todo list
            </div>
            <div className={styles.inputFields}>
                <CreateProject createProject={createProject} dynamicProjectList={dynamicProjectList}></CreateProject>
                <CreateToDo createToDo={createToDoItem} dynamicProjectList={dynamicProjectList}></CreateToDo>
            </div>
            
            <div className={styles.projectGrid}>
                {dynamicProjectList.map((proj, idx) => <Project key={idx} name={proj.name} items={proj.items} deleteToDo={deleteToDoItem}></Project>)}
            </div>
        </div>
    )
}