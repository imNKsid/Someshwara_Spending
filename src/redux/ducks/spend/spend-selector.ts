import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const spendingBudget = (): any => {
  const spendingBudget = useSelector(
    (state: RootState) => state.spend.spendingBudget
  );
  return spendingBudget;
};

const totalSpent = (): any => {
  const totalSpent = useSelector((state: RootState) => state.spend.totalSpent);
  console.log("totalSpent =>", totalSpent, typeof totalSpent);
  return totalSpent;
};

const categorySpendBudget = (): any => {
  const categorySpendBudget = useSelector(
    (state: RootState) => state.spend.categorySpendBudget
  );
  return categorySpendBudget;
};

const grocerySpent = (): any => {
  const grocerySpent = useSelector(
    (state: RootState) => state.spend.grocerySpent
  );
  return grocerySpent;
};

const clothSpent = (): any => {
  const clothSpent = useSelector((state: RootState) => state.spend.clothSpent);
  return clothSpent;
};

const beautySpent = (): any => {
  const beautySpent = useSelector(
    (state: RootState) => state.spend.beautySpent
  );
  return beautySpent;
};

const healthSpent = (): any => {
  const healthSpent = useSelector(
    (state: RootState) => state.spend.healthSpent
  );
  return healthSpent;
};

const foodSpent = (): any => {
  const foodSpent = useSelector((state: RootState) => state.spend.foodSpent);
  return foodSpent;
};

const houseSpent = (): any => {
  const houseSpent = useSelector((state: RootState) => state.spend.houseSpent);
  return houseSpent;
};

const SpendSelector = {
  spendingBudget,
  totalSpent,
  categorySpendBudget,
  grocerySpent,
  clothSpent,
  beautySpent,
  healthSpent,
  foodSpent,
  houseSpent,
};

export default SpendSelector;
