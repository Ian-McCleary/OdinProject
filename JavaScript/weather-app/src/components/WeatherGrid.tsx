import { WeatherDay } from "../interfaces/Weather"
import styles from "../styles/weather.module.css"
import WeatherTile from "./WeatherTile"

interface IProps{
    forcast: WeatherDay[] | undefined
}

export default function WeatherGrid({ forcast }: IProps) {
    if (forcast == undefined) {
        return <div style={{textAlign: "center"}}>Search by longitude and latitude to display weather information</div>
    }
    return (
        <div className={styles.weatherGrid}>
            {forcast.map((val, idx) => <WeatherTile key={idx} weatherData={val}></WeatherTile>)}
        </div>
    )
}