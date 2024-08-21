import { WeatherDay } from "../interfaces/Weather"

/** Get the week forcast from the API */
async function getForcast(longitude: number, latitutde: number, isCelsius: boolean): Promise<WeatherDay[]>{
    let unit = ""
    let unitSymbol = "°C"
    if (!isCelsius) {
        unit = "temperature_unit=fahrenheit&"
        unitSymbol = "°F"
    }
    return fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitutde + "&longitude=" + longitude + "&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&" + unit + "wind_speed_unit=mph&timezone=GMT")
    .then(res => res.json())
    .then(res => {
        let days: WeatherDay[] = []
        for(let i  = 0; i < res["daily"]["time"].length; i++){
            days.push(
                {
                    time: res["daily"]["time"][i],
                    weatherCode: res["daily"]["weather_code"][i],
                    maxTemperature: res["daily"]["temperature_2m_max"][i],
                    minTemperature: res["daily"]["temperature_2m_min"][i],
                    uvIndex: res["daily"]["uv_index_max"][i],
                    unitSymbol: unitSymbol
                }
            )
        }
        return days
    })
}

export {getForcast}