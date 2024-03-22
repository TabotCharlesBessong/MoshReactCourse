import { Todo } from "../types";
import APIClient from "./apiClient";

export default new APIClient<Todo>('/todos')