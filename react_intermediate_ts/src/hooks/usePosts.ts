import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_POSTS } from "../constants/variables";
// import postService from "../services/postService";
import { Todo } from "../types";
import axios from "axios";

const usePosts = (userId: number | undefined) => {
  return useQuery<Todo[], Error>({
    queryKey:userId ? ["users", userId, CACHE_KEY_POSTS] : [CACHE_KEY_POSTS],
    // queryFn: postService.getAll,
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 100,
  });
};

export default usePosts;
