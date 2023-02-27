import Card from "../ui/card";
import styles from "./meal-summary.module.css";

const MealSummary = () => {
  return (
    <Card className={styles.summary}>
      <section>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All of our meals are cooked with high-quality ingredients,
          just-in-time and of course by experienced chefs!
        </p>
      </section>
    </Card>
  );
};

export default MealSummary;
