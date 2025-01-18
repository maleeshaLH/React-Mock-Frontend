// src/components/SignIn.js
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
    const dispatch = useDispatch();
    // const { email, password } = useSelector((state) => state.form);

    const handleSubmit = () => {
        // Perform Sign-In API call here

    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-900">
            <form
                className="bg-gray-800 p-8 rounded shadow-lg w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-white text-2xl font-bold text-center mb-6">
                    Sign In
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input
                        type="email"
                        // value={email}
                        // onChange={(e) => dispatch(updateEmail(e.target.value))}
                        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2">Password</label>
                    <input
                        type="password"
                        // value={password}
                        // onChange={(e) => dispatch(updatePassword(e.target.value))}
                        className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Sign In
                </button>
                <div className="text-center mt-4">
                    <a href="#" className="text-gray-400 text-sm hover:text-white">
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

export default SignIn;
