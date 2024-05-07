import Activate_tools from "./components/Activate_tools";
import Header from "./components/Header";
import Infor from "./components/Infor";
import './assets/css/App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/", element: <Activate_tools /> },
  { path: "/infor", element: <Infor /> },
]);

function App() {
  return (
    <>
      <Header/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
