import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const fetchMeals = () =>
    axios
      .get(`${process.env.REACT_APP_FIREBASE_FOOD_APP_URL}/meals.json`)
      .then((res) => {
        transformData(res.data);
        setIsLoading(false);
      })
      .catch(console.log);

  useEffect(() => {
    setTimeout(fetchMeals, 1000);
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

  return !isLoading ? (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  ) : (
    <div style={{ textAlign: "center", color: "white", marginTop: 25 }}>
      Loading..
    </div>
  );
};

export default AvailableMeals;
