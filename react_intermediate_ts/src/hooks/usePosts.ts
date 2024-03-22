import { useQuery } from "@tanstack/react-query";
import { Todo } from "../types";
import { CACHE_KEY_TODOS } from "../constants/variables";
import postService from "../services/postService";

const usePosts = () => {
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: postService.getAll,
    staleTime: 10 * 100,
  });
};

export default usePosts;
