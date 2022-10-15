import "./styles.css";
import React from "react";
import BlogContextDemo from "./components/BlookContextDemo";
import View from "./components/ViewItems";
const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Veena M"
  }
};

export const BlogContext = React.createContext(blogInfo);

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>Hello KP</h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo />
        </BlogContext.Provider>
        <View />
      </div>
    </div>
  );
}
