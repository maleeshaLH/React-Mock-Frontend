import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayoutComponent} from "./components/header/RootLayoutComponent.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import DashBoard from "./pages/DashBoard.tsx";
import FieldPage from "./pages/FieldPage.tsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element :<RootLayoutComponent/>,
      children:[
        {path :'',element :<HomePage/>},
        {path:'/dashboard',element:<DashBoard/>},
        {path:'/field',element:<FieldPage/>}

      ]
    }
  ]);
  return (
      <>
        <RouterProvider router={router}/>

      </>
  )
}

export default App
