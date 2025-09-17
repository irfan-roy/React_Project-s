import { useContext, useRef } from "react";
import { PostList } from "./Store/Store-All-Items";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter your user id here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="Enter your filling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Title Content
        </label>
        <textarea
          type="text"
          rows="4"
          name="body"
          className="form-control"
          id="body"
          placeholder="Enter title related text"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reaction
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reaction"
          placeholder="How many people reaction your post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter tags post related "
        />
      </div>

      <button type="submit" className="btn btn-outline-primary">
        Post
      </button>
    </Form>
  );
};

export async function CreateActionPost(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
