import useAsync from "../hooks/useAsync";
import Blogpost from "./Blogpost";

const fetchBlogpost = async () => {
  const url = "http://localhost:3000/posts";
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};

const Bloglist = () => {
  const [data, loading] = useAsync(fetchBlogpost);
  if (loading) {
    return <section>Loading...</section>;
  }
  return (
    <section>
      {data.map((item) => (
        <Blogpost
          key={item.id}
          author={item.author}
          title={item.title}
          body={item.body}
          id={item.id}
        />
      ))}
    </section>
  );
};

export default Bloglist;
