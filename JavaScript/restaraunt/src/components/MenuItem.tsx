import { useState, useEffect } from "react";
import { IMeal } from "../interfaces/IMeal";
import { getRandomMeal } from "../services/GetMealService";
import styles from "../styles/menuItem.module.css"

export default function MenuItem(){

    /** state and effect for getting random meal form url */
    const [meal, setMeal] = useState<IMeal>();

    useEffect(() => {
        getMeal()
    }, []);

    async function getMeal() {
        setMeal(await getRandomMeal());
    }

    if (meal == null){
        return (<div></div>)
    }

    return (
        <div className={styles.menuItem}>
            <div className={styles.menuImage} style={{backgroundImage: 'url(' + meal.strMealThumb + ')'}}>
                <div className={styles.menuItemName}>{meal.strMeal}</div>
            </div>
            < div className={styles.ingredients}>
                <b>Ingredients:</b> delicious {meal.strIngredient1}, flavorful {meal.strIngredient2}, magnificent {meal.strIngredient3}
            </div>
        </div>
    )

}