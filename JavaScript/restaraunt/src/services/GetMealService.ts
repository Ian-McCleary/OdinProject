import { IMeal } from "../interfaces/IMeal";


const getRandomMeal = async (): Promise<IMeal> => {
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {return res["meals"][0] as IMeal})
}

export {getRandomMeal}