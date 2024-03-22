import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { CACHE_KEY_POSTS } from "../constants/variables";
// import postService from "../services/postService";
import { Todo } from "../types";
import axios from "axios";

interface PostQuery {
  page:number
  pageSize:number
}

const usePosts = (userId: number | undefined,query:PostQuery) => {
  return useQuery<Todo[], Error>({
    queryKey:userId ? ["users", userId, CACHE_KEY_POSTS,query] : [CACHE_KEY_POSTS,query],
    // queryFn: postService.getAll,
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId,
            _start:(query.page - 1) * query.pageSize,
            _limit:query.pageSize
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 100,
    placeholderData:keepPreviousData
  });
};

export default usePosts;
