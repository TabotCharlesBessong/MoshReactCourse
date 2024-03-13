import { Categories } from "../App";

const ExpenseForm = () => {
  return (
    <form className="px-6" action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="number" id="amount" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-control">
          <option value=""></option>
          {Categories.map((cate) => (
            <option key={cate} value={cate}>{cate}</option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ExpenseForm