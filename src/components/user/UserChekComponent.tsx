import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useSelector} from "react-redux";
import {User} from "../../models/User.ts";

export const UsersChekComponent =()=> {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // @ts-ignore
    const users = useSelector((state)=>state.user);
    const handleSubmit = ( ) => {


        console.log('1')
        if (!email || !password) {
            setError(" incorrect Email or Password ");
            return;
        }
        const user = users.find((user: User) => user.email === email && user.password === password);

        const checkUser = (email: string, password: string) => {
            return email === 'lhmv114@gmail.com' && password === '123';
        };

        console.log(user)
        if (user || checkUser(email, password)) {
            navigate("/dashboard");
            alert("Successfully logged in");
            // Redirect to dashboard if user is found
        } else {
            setError("Incorrect email or password."); // Show error if no match
        }

    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <form
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-96"
            >
                <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign In</h2>
                {error && (
                    <div className="text-red-500 mb-4 text-center">{error}</div>
                )}
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
                <button
                    type="button"
                    onSubmit={handleSubmit}

                    className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >

                    Sign In
                </button>
                <div className="text-center mt-4">
                    <a href="/dashboard" className="text-gray-400 text-sm hover:text-white">
                        Forgot Password?
                    </a>

                </div>
                <div className="text-center mt-2">
                    <a href="/signup" className="text-gray-400 text-sm hover:text-white">
                        Not a member? Sign Up
                    </a>

                </div>
            </form>
        </div>
    );
};
export default UsersChekComponent;