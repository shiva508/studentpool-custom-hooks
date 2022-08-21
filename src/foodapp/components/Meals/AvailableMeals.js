import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import axios from "axios";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    setIsloading(true);

    const fetchRecords = async () => {
      const response = await axios(
        `https://tasks-a49eb-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json`
      );
      return await response.data;
    };

    fetchRecords()
      .then((response) => {
        let loadedmeals = [];
        for (const key in response) {
          loadedmeals.push({
            id: key,
            name: response[key].name,
            description: response[key].description,
            price: response[key].price,
          });
        }
        setMeals(loadedmeals);
        setIsloading(false);
      })
      .catch((err) => {
        setIsloading(false);
        setHttpError(true);
        console.log("myerror", err);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsloading}>
        <p>Loading....</p>
      </section>
    );
  }
  if (httpError) {
    return (
      <section className={classes.mealsloading}>
        <p>Something went wrong</p>
      </section>
    );
  }
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
