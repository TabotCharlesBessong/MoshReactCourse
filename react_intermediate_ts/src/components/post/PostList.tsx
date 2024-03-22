import usePosts from "../../hooks/usePosts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul className="list-group mt-8">
      {posts?.slice(0, 10)?.map((post) => (
        <li key={post.id} className="list-group-item mt-2">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;