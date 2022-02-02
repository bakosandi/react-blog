import { useState } from "react";
import Editor from "./Editor";

async function postBlogpost(payload) {
  const url = "http://localhost:3000/posts";
  const body = JSON.stringify(payload);
  const respone = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
  });

  const data = await respone.json();
  console.log(data);

  return data;
}
// put: ez az update, frissíti a backenden lévő tartalmat, post: új létrehozása
async function putBlogpost(id, payload) {
  const url = "http://localhost:3000/posts/" + id;
  const body = JSON.stringify(payload);
  const respone = await fetch(url, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body,
  });

  const data = await respone.json();
  console.log(data);

  return data;
}

const EditorContainer = (props) => {
  const [loading, setLoading] = useState(false);

  const handleSave = async (payload) => {
    // payload neve nem számít, a pozíciója számít
    setLoading(true);

    if (props.blogpost) {
      await putBlogpost(props.blogpost.id, payload);
    } else {
      await postBlogpost(payload);
    }

    setLoading(false);
  };

  return (
    <Editor blogpost={props.blogpost} onSave={handleSave} loading={loading} />
  );
};

export default EditorContainer;
