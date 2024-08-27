import { WeatherDay } from "../interfaces/Weather"
import { getWeatherDescriptionFromCode, getWeatherImageFromCode } from "../utils/WeatherCodeUtil"
import styles from "../styles/weather.module.css"

interface IProps {
    weatherData: WeatherDay
}
export default function WeatherTile({ weatherData }: IProps) {
    return (
        <div className={styles.weatherTile} style={{backgroundImage: 'url("' + getWeatherImageFromCode(weatherData.weatherCode) + '")'}}>
            <div className={styles.weatherDate}>{weatherData.time}</div> 
            <div className={styles.weatherTemps}>
                <div>{weatherData.minTemperature}{weatherData.unitSymbol}</div>
                |
                <div>{weatherData.maxTemperature}{weatherData.unitSymbol}</div>
            </div>
            <div>{getWeatherDescriptionFromCode(weatherData.weatherCode)}</div>
            <div className={styles.weatherUV}>UV Index: {weatherData.uvIndex}</div>
        </div>
    )
}