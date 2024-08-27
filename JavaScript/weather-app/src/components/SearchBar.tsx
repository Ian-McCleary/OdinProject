import { useState } from "react"
import styles from "../styles/searchBar.module.css"

interface IProps {
    searchForForcast: (longitude: number, latitude: number, isCelsius: boolean) => void,
}

export default function SearchBar({ searchForForcast } : IProps) {

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [celsius, setCelsius] = useState(false)

    const clamp = (min: number, max: number, value: number) => {
        return Math.max(Math.min(max, value), min)
    }

    function updateLongitude(event: React.FormEvent<HTMLInputElement>){
        setLongitude(clamp(-180, 180, parseFloat(event.currentTarget.value)))
    }

    function updateLatitude(event: React.FormEvent<HTMLInputElement>){
        setLatitude(clamp(-90, 90, parseFloat(event.currentTarget.value)))
    }

    function updateCelsius(event: React.FormEvent<HTMLSelectElement>){
        setCelsius(event.currentTarget.value == "celsius")
    }

    return (
        <div>
            <div className={styles.inputForm}>
                <div>
                    <label htmlFor="longitudeInput">Longitude:</label>
                    <input id="longitudeInput" type="number" value={longitude} step="0.01" onChange={(event) => updateLongitude(event)}></input>
                </div>
                <div>
                    <label htmlFor="latitidueInput">Latitude:</label>
                    <input id="latitidueInput" type="number" value = {latitude} step="0.01" onChange={(event) => updateLatitude(event)}></input>
                </div>
                <div>
                    <select name="select units" onChange={(event) => updateCelsius(event)}>
                        <option key="fahrenheit" value="fahrenheit">°F</option>
                        <option key="celsius" value="celsius">°C</option>
                    </select>
                </div>
                <div>
                    <button onClick={() => searchForForcast(longitude, latitude, celsius)}>Submit</button>
                </div>
                
            </div>
        </div>
    )
}