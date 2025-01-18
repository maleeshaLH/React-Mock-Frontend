import {Link} from "react-router-dom";
import HomeImage from '../../assets/Screenshot 2024-10-30 194635.png'
export const NavbarHomeComponent = () => {


    return (
        <>
            <div>
                {/* Navbar */}
                <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Green Shadow (Pvt) Ltd.</h1>
                    <ul className="flex space-x-6">
                        <li><a href="#about" className="hover:text-gray-300">About</a></li>
                        <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                        <li>

                            {/*<button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"*/}
                            {/*onClick={()=> navigater("/dashboard")}>*/}
                            {/*    LOGIN*/}
                            {/*</button>*/}
                            <Link to="/signIn" className="custom-link blur-0 hover:bg-blue-500 px-3 py-2 rounded">
                                Login
                            </Link>

                        </li>
                    </ul>
                </nav>

                {/* Hero Section */}
                {/*<header className="relative bg-cover bg-center h-[60vh]"*/}
                {/*         >*/}
                {/*    <img src={HomeImage}/>*/}
                {/*    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">*/}
                {/*        <div className="text-center text-white">*/}
                {/*            <h1 className="text-4xl font-bold">Welcome to Green Shadow (Pvt) Ltd.</h1>*/}
                {/*            <p className="text-lg mt-4">Your partner in sustainable farming and agricultural*/}
                {/*                excellence</p>*/}
                {/*            <button className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded">*/}
                {/*                LEARN MORE*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</header>*/}

                <header className="relative w-full h-3/4 bg-cover bg-center">
                    <img src={HomeImage} alt="A scenic farming landscape" className="w-full h-screen object-cover"/>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-5xl font-bold">Welcome to Green Shadow (Pvt) Ltd.</h1>
                            <p className="text-xl mt-4">
                                Your partner in sustainable farming and agricultural excellence
                            </p>
                            <button className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-lg">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </header>

                 {/*Services Section*/}
                <section id="services" className="py-16 bg-gray-100">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold">Field Management</h3>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold">Crop Monitoring</h3>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-xl font-semibold">Equipment & Support</h3>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}