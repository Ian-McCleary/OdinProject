import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherGrid from "./WeatherGrid";
import { WeatherDay } from "../interfaces/Weather";
import { getForcast } from "../services/GetWeatherService";

export default function MainContent() {
    console.log("made main content")
    const [currentForcast, setCurrentForcast] = useState<WeatherDay[]>()

    async function onClickGetForcast(longitude: number, latitude: number, isCelsius: boolean){
        setCurrentForcast(await getForcast(longitude, latitude, isCelsius))
    }


    return (
        <div>
            <SearchBar searchForForcast={onClickGetForcast}></SearchBar>
            <WeatherGrid forcast={currentForcast}></WeatherGrid>
        </div>
    )
}