import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import PostListProvider from "./Components/Store/Store-All-Items";
import PostList from "./Components/PostList";
import { Outlet } from "react-router-dom";

function App() {
  const [SelectedPost, SetSelectedPost] = useState("Home");

  return (
    <PostListProvider>
      <div className="sideContainer">
        <Sidebar
          SelectedPost={SelectedPost}
          SetSelectedPost={SetSelectedPost}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
