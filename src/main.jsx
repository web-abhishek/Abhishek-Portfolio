import Home from "./components/Home";
import Contacts from "./components/Contacts";
// import Projects from "./components/Projects";
import ProjectsMain from "./components/ProjectsMain";
import About from "./components/About";
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // {
        //   path: "/about",
        //   element: <About />,
        // },
        // {
        //   path: "/projects",
        //   element: <ProjectsMain />,
        // },
        {
          path: "/contact",
          element: <Contacts />,
        },
      ],
    },
]);
  
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

