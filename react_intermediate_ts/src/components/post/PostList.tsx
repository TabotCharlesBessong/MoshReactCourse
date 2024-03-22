import { useState } from "react";
import usePosts from "../../hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const [page, setPage] = useState<number>(1)
  const pageSize = 10
  const { data: posts, error, isLoading } = usePosts(userId,{page,pageSize});
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        className="form-select mb-4"
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group mt-8">
        {posts?.slice(0, 30)?.map((post) => (
          <li key={post.id} className="list-group-item mt-2">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 ms-4"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
