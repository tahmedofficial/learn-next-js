"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {

    const [search, setSearch] = useState("a");
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [search])

    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} className="h-12 bg-gray-200 outline-none px-3 rounded-lg" type="text" placeholder="Search here" />
            {
                meals === "no data found" ? <h3>{meals}</h3> :
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            meals?.map(meal => (
                                <div key={meal.idMeal} className="space-y-4">
                                    <Image src={meal?.strMealThumb} alt={meal?.strMealThumb} width={500} height={500} />
                                    <h3>Title: {meal.strMeal}</h3>
                                    <h3>Description: {meal.strInstructions}</h3>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default Meals;