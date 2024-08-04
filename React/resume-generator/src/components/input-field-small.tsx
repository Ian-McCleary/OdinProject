import { useState } from "react"
import FieldProps from "../interfaces/FieldProps"


function SmallInputField({label, placeholder, value, id}: FieldProps) {

    /** state for if user is editing the field */
    const [isUserEditing, setIsUserEditing] = useState(false)
    const [inputValue, setInputValue] = useState(placeholder)

    function onChange(event: React.FormEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value)
    }
    
    /** Returns edit button when static text displayed*/
    function editButton() {
        return (
            <button className="edit-btn-small" onClick={() => setIsUserEditing(true)}>Edit</button>
        )
    }

    /** Returns accept button when input box displayed */
    function acceptButton() {
        
        return (
            <button className="accept-btn-small" onClick={() => setIsUserEditing(false)}>Accept</button>
        )
    }

    /** Returns input box when user is editing text */
    function inputField({ placeholder, value, id}: FieldProps) {

        return (
            <input id={id} 
                    className="input-small" 
                    type="text" 
                    placeholder={placeholder} 
                    value={inputValue}
                    onChange={onChange}></input>
        )
    }

    /** Returns input label for iput box */
    function inputLabel({label, id}: FieldProps){
        return (
            <label htmlFor={id}>{label}:</label>
        )
    }

    /** Returns static html text display when user is not editing field */
    function textDisplay({id}: FieldProps){
        return (
            <div className="small-text" id={id}>
                {inputValue}
            </div>
        )
    }

    if (isUserEditing) {
        var displayField = inputField({label, placeholder, value, id})
        var displayButton = acceptButton()
    } else {
        var displayField = textDisplay({label, placeholder, value, id})
        var displayButton = editButton()
    }
    return (
        <div>
            {inputLabel({label, placeholder, value, id})}
            {displayField}
            {displayButton}
        </div>
    )
}

export default SmallInputField