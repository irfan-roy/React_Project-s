import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.Payload.PostID
    );
  } else if (action.type === "Add_Initial_POST") {
    newPostList = action.Payload.Posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.Payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, disPatchPostList] = useReducer(PostListReducer, []);

  const addPost = (post) => {
    disPatchPostList({
      type: "ADD_POST",
      Payload: post,
    });
  };
  const addInitialPost = (Posts) => {
    disPatchPostList({
      type: "Add_Initial_POST",
      Payload: {
        Posts,
      },
    });
  };

  const deletePost = (PostId) => {
    disPatchPostList({
      type: "DELETE_POST",
      Payload: {
        PostId,
      },
    });
    [disPatchPostList];
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
