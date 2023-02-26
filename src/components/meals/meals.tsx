import MealList from "./meal-list";
import MealSummary from "./meal-summary";
import styles from "./meals.module.css";

const Meals = () => {
  return (
    <>
      <MealSummary />
      <MealList />
    </>
  );
};

export default Meals;
