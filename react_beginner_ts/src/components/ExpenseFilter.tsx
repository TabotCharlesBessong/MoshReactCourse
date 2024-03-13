import { FC } from "react";

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter: FC<ExpenseFilterProps> = ({ onSelectCategory }) => {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select"
    >
      <option value="">All Categories</option>
      <option value="Grocerries">Grocerries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Bills">Bills</option>
      <option value="Food">Food</option>
    </select>
  );
};

export default ExpenseFilter;
