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
import SignIn from "./pages/SignInPage.tsx";
import UserPage from "./pages/UserPage.tsx";
function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element :<RootLayoutComponent/>,
      children:[
        {path :'',element :<HomePage/>},
        {path:'/dashboard',element:<DashBoard/>},
        {path:'/signup',element:<UserPage/>},
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
// src/components/SignIn.js
//
// import {useState} from "react";
// import {useNavigate} from "react-router";
//
// const SignIn = () => {
//     // const { email, password } = useSelector((state) => state.form);
//     const navigate = useNavigate(); // Initialize navigate for redirection
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//
//     const handleSubmit = (event: React.FormEvent) => {
//         event.preventDefault();
//
//         // Basic validation
//         if (!email || !password) {
//             setError("Email සහ Password අවශ්‍ය වේ!");
//             return;
//         }
//
//         // Simulate authentication (replace with API call)
//         if (email === "admin@example.com" && password === "password123") {
//             navigate("/dashboard"); // Redirect to Dashboard on success
//         } else {
//             setError("අනිවාර්යව Email හෝ Password වැරදියි.");
//         }
//     };
//     return (
//         <div className="h-screen flex justify-center items-center bg-gray-900">
//             <form
//                 className="bg-gray-800 p-8 rounded shadow-lg w-96"
//                 onSubmit={handleSubmit}
//             >
//                 <h2 className="text-white text-2xl font-bold text-center mb-6">
//                     Sign In
//                 </h2>
//                 <div className="mb-4">
//                     <label className="block text-gray-400 mb-2">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         // value={email}
//                         // onChange={(e) => dispatch(updateEmail(e.target.value))}
//                         className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
//                         placeholder="Enter your email"
//
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-400 mb-2">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         // value={password}
//                         // onChange={(e) => dispatch(updatePassword(e.target.value))}
//                         className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
//                         placeholder="Enter your password"
//
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                 >
//                     Sign In
//                 </button>
//                 <div className="text-center mt-4">
//                     <a href="#" className="text-gray-400 text-sm hover:text-white">
//                         Forgot Password?
//                     </a>
//                 </div>
//                 <div className="text-center mt-2">
//                     <a href="/signup" className="text-gray-400 text-sm hover:text-white">
//                         Not a member? Sign Up
//                     </a>
//                 </div>
//             </form>
//         </div>
//     );
// };
//
// export defa