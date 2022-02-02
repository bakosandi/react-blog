import { useEffect, useState } from "react";
import Blogpost from "./Blogpost";

const fetchBlogpost = async () => {
  const url = "http://localhost:3000/posts";
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};

const useAsync = (fn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fn().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, [fn]);
  return [data, loading];
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
        />
      ))}
    </section>
  );
};

export default Bloglist;
