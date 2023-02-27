import Card from "../ui/card";
import MealItem from "./meal-item/meal-item";
import styles from "./meal-list.module.css";

const meals = [
  {
    id: 1,
    name: "Full Stack Burger",
    description: "Taste the full stack!",
    price: 11.99,
  },
  {
    id: 2,
    name: "Crispy Code Fries",
    description: "Mmmm, crunchy!",
    price: 4.99,
  },
  {
    id: 3,
    name: "Bug Salad",
    description: "No bugs were harmed in the making of the salad..",
    price: 7.5,
  },
  {
    id: 4,
    name: "Meal-as-Code",
    description: "Deploying all the meals straight to your stomach!",
    price: 29.99,
  },
];

interface Props {}

const MealList = (props: Props) => {
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
      <ul>{mealItems}</ul>
    </Card>
  );
};

export default MealList;
