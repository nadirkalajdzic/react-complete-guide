import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const transformData = (data) => {
    let array = [];

    for (const key in data)
      array.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });

    setMeals(array);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_FIREBASE_FOOD_APP_URL}/meals.json`)
      .then((res) => transformData(res.data))
      .catch(console.log);
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
