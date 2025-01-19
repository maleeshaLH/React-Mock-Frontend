import {useState} from "react";
import {User} from "../../models/User.ts";
import {useDispatch} from "react-redux";
import {addUser} from "../../reducers/UserSlice.tsx";
import {useNavigate} from "react-router-dom";

// export const UserInputComponent =() => {
//
//     const dispatch = useDispatch();
//
//     const [userName, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState("");
//
//     const handelSubmit = (type:string) => {
//
//         const NewUSer : User={
//             userName,email,password,role
//         }
//
//         switch (type) {
//             case "ADD_USER":
//                 dispatch(addUser(NewUSer));
//                 console.log(NewUSer)
//                 console.log()
//                 break;
//         }
//     };
//
//     return (
//         <>
//             <div className="flex items-center justify-center h-screen bg-gray-900">
//                 <form  className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
//                     <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign Up</h2>
//                     <input
//                         type="text"
//                         name="userName"
//                         onChange={(e) => setUserName(e.target.value)}
//                         placeholder="UserName"
//                         className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
//                     />
//                     <input
//                         type="text"
//                         name="email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
//                     />
//                     <input
//                         type="text"
//                         name="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
//                     />
//                     <select
//                         name="role"
//                         onChange={(e) => setRole(e.target.value)}
//                         className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
//                     >
//                         <option value="">Choose Role</option>
//                         <option value="Admin">MANAGER</option>
//                         <option value="User">SCIENTIST</option>
//                         <option value="User">ADMINISTRATIVE</option>
//
//                     </select>
//                     <button
//                         type="submit"
//                         onClick={()=> handelSubmit('ADD_USER')}
//                         className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold"
//                     >
//                         Sign Up
//                     </button>
//                     {/*<Link to="/dashboard"*/}
//                     {/*      */}
//                     {/*      className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold">*/}
//                     {/*    Login*/}
//                     {/*</Link>*/}
//                 </form>
//             </div>
//         </>
//     )
// }

export const UserInputComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handelSubmit = (type: string) => {

        const NewUSer: User = {
            userName,
            email,
            password,
            role,
        };

        switch (type) {
            case "ADD_USER":
                dispatch(addUser(NewUSer));
                alert("Successfully add user");
                navigate('/signIn')
                console.log(NewUSer);
                break;
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <form
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="UserName"
                    className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                />
                <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                />
                <input
                    type="text"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                />
                <select
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                >
                    <option value="">Choose Role</option>
                    <option value="Admin">MANAGER</option>
                    <option value="User">SCIENTIST</option>
                    <option value="User">ADMINISTRATIVE</option>
                </select>
                <button
                    type="button"
                    onClick={()=>handelSubmit("ADD_USER")}
                    className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                    Sign Up
                </button>
                <div className="text-center mt-2">
                    <a href="/signIn" className="text-gray-400 text-sm hover:text-white">
                        Already a member?  Sign In
                    </a>
                </div>
            </form>

        </div>
    );
};
