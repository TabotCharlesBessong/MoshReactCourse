import { useState } from "react";
import { ExpenseFilter, ExpenseList } from "./components";
import { expenses as exps } from "./constant/data";

const App = () => {
  const [expenses, setExpenses] = useState(exps);
  const [selectedCat, setSelectedCat] = useState("");

  const visibleExpenses = selectedCat
    ? expenses.filter((e) => e.category === selectedCat)
    : expenses;
  return (
    <div>
      <div className="mb-2">
        <ExpenseFilter onSelectCategory={(cat) => setSelectedCat(cat)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((exp) => exp.id !== id))}
      />
    </div>
  );
};

export default App;
