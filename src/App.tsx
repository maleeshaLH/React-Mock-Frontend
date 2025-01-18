import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayoutComponent} from "./components/header/RootLayoutComponent.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import DashBoard from "./pages/DashBoard.tsx";
import FieldPage from "./pages/FieldPage.tsx";
import CropPage from "./pages/CropPage.tsx";
import StaffPage from "./pages/StaffPage.tsx";
import LogMonitoring from "./pages/LogMonitoring.tsx";
import VehiclePage from "./pages/VehiclePage.tsx";
import {EquipmentPages} from "./pages/EquipmentPage.tsx";
import SignUpForm from "./pages/UserPage.tsx";
import SignIn from "./pages/SignInPage.tsx";
function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element :<RootLayoutComponent/>,
      children:[
        {path :'',element :<HomePage/>},
        {path:'/dashboard',element:<DashBoard/>},
        {path:'/signup',element:<SignUpForm/>},
        {path:'signIn',element:<SignIn/>},
        {path:'/field',element:<FieldPage/>},
        {path:'/crop',element:<CropPage/>},
        {path:'/staff',element:<StaffPage/>},
        {path:'/log',element:<LogMonitoring/>},
        {path:'/vehicle',element:<VehiclePage/>},
        {path:'/equipment',element:<EquipmentPages/>}

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
