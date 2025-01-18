// src/components/SignUpForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";

const SignUpForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '', role: '' });
    const dispatch = useDispatch();

    const handleChange = () => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {

        // dispatch(addUser(formData)); // Save user data to Redux
        setFormData({ email: '', password: '', role: '' }); // Clear form
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                />
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
                >
                    <option value="">Choose Role</option>
                    <option value="Admin">MANAGER</option>
                    <option value="User">SCIENTIST</option>
                    <option value="User">ADMINISTRATIVE</option>

                </select>
                {/*<button*/}
                {/*    type="submit"*/}
                {/*    className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold"*/}
                {/*>*/}
                {/*    Sign Up*/}
                {/*</button>*/}
                <Link to="/dashboard" className="w-full p-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold">
                    Login
                </Link>
            </form>
        </div>
    );
};

export default SignUpForm;
