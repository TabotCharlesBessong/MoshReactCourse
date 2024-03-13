import { useState } from "react"
import { ExpenseList } from "./components"
import { expenses as exps } from "./constant/data"

const App = () => {
  const [expenses, setExpenses] = useState(exps)
  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(exp => exp.id !== id))} />
    </div>
  )
}

export default App