import { z } from "zod";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Categories } from "../constant/data";
import { FC } from "react";

interface ExpenseFormProps {
  onSubmit:(data:ExpenseFormData) => void
}

const schema = z.object({
  description: z
    .string()
    .min(3, {
      message: "Description should be at least 3 characters of length",
    })
    .max(50, {
      message: "Description should be at most 50 characters of length",
    }),
  amount: z
    .number({ invalid_type_error: "Number is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(Categories,{
    errorMap:() => ({message:"Category is required!"})
  }),
});

type ExpenseFormData = z.infer<typeof schema>

const ExpenseForm:FC<ExpenseFormProps> = ({onSubmit}) => {
  const {handleSubmit,register,formState:{errors},reset} = useForm<ExpenseFormData>({resolver:zodResolver(schema)})
  return (
    <form onSubmit={handleSubmit(data => {
      onSubmit(data);
      reset()
    })} className="px-6" action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger mt-2">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount",{valueAsNumber:true})}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger mt-2">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        >
          <option value=""></option>
          {Categories.map((cate) => (
            <option key={cate} value={cate}>
              {cate}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger mt-2">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
