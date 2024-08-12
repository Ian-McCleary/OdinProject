import styles from "../styles/mainContainer.module.css"
import Project from "./project"
import { useEffect, useState } from "react"
import { IProject } from "../interfaces/IProject"
import { listOfProjects } from "../constants/listOfProjects"

export default function MainContainer() {


    return (
        <div>
            <div className={styles.siteTitle}>
                Todo list
            </div>
            <div className={styles.projectGrid}>
                {listOfProjects.map((proj, idx) => <Project key={idx} name={proj.name} items={proj.items}></Project>)}
            </div>
        </div>
    )
}