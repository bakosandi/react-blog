import React from "react";
import { useState } from "react";

const Editor = (props) => {
  const [title, setTitle] = useState(props?.blogpost?.title ?? ""); //?. = optional chaining operator, ??"" nullish coalescing operator
  const [body, setBody] = useState(props?.blogpost?.body ?? "");
  const [author, setAuthor] = useState(props?.blogpost?.author ?? "");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleAuthorChange(e) {
    setAuthor(e.target.value);
  }
  function handleBodyChange(e) {
    setBody(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (title === "" || body === "" || author === "") {
      return;
    }

    const payload = {
      title, // mondhatom azt is, hogy title: title, body: body, author: author
      body,
      author,
    };

    setTitle("");
    setBody("");
    setAuthor("");

    props.onSave(payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title of blogpost"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="author of blogpost"
        value={author}
        onChange={handleAuthorChange}
      />
      <textarea
        placeholder="body of blogpost"
        value={body}
        onChange={handleBodyChange}
      />
      <button disabled={props.loading} type="submit">
        {props.loading ? "...loading" : "Save"}
      </button>
    </form>
  );
};

export default Editor;

// disabled= {loading ? true : false} is lehetne!!
