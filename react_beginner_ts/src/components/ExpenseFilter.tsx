import { FC } from "react";
import { Categories } from "../App";

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
      {Categories.map((cate) => (
        <option key={cate} value={cate}>{cate}</option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
