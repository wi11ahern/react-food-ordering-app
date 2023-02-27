import { useEffect, useState } from "react";
import useHttp from "../../hooks/useHttp";
import Card from "../ui/card";
import MealItem, { Meal } from "./meal-item/meal-item";
import styles from "./meal-list.module.css";

interface Props {}

const MealList = (props: Props) => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const { sendRequest, isLoading, encounteredError } = useHttp();

  useEffect(() => {
    const mealParser = (data: any) => {
      const mealList = [];
      for (const i in data) {
        if (i === "0") continue;
        mealList.push({ id: Number(i), ...data[i] });
      }
      console.log(mealList);
      setMeals(mealList);
    };

    sendRequest(
      {
        url: "https://wills-react-sandbox-default-rtdb.firebaseio.com/meals.json",
        method: "GET",
        headers: { content: "application/json" },
      },
      mealParser
    );
  }, []);

  const mealItems = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <Card className={styles.meals}>
      {isLoading && <p>Loading meals...</p>}
      <ul>{mealItems}</ul>
    </Card>
  );
};

export default MealList;
