import styles from "../styles/tictactoe.module.css"

interface IProps {
    id: number,
    onClick: (id: number) => void,
    disabled: boolean,
    whoClicked: number,
}

export default function GridButton({id, onClick, disabled, whoClicked}: IProps) {


    const textValue = () => {
        if (whoClicked == 1){
            return "X"
        } else if (whoClicked == 2) {
            return "O"
        }
        return ""
    }

    return (<button className={styles.gridButton} onClick={() => onClick(id)} disabled={disabled}>{textValue()}</button>)
}