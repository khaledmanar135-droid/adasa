import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Notfound from "./Component/Notfound/Notfound";
import Layout from "./Component/Layout/Layout";
import Blog from "./Component/Blog/Blog";
import PostDetails from "./Component/PostDetails/PostDetails";
import Terms from "./Component/Terms/Terms";
import Privacy from "./Component/Privacy/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <PostDetails /> },
      { path: "about", element: <About /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
