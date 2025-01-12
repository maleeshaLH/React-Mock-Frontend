export const SliderBarComponents = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="bg-blue-900 text-white w-64 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold p-4">Dashboard</h2>
                    <ul className="space-y-4 mt-6">
                        <li className="flex items-center p-4 hover:bg-blue-800">
                            <span className="material-icons mr-3">dashboard</span> Dashboard
                        </li>
                        <li className="flex items-center p-4 hover:bg-blue-800">
                            <span className="material-icons mr-3">eco</span> Field
                        </li>
                        <li className="flex items-center p-4 hover:bg-blue-800">
                            <span className="material-icons mr-3">spa</span> Crop
                        </li>
                        <li className="flex items-center p-4 hover:bg-blue-800">
                            <span className="material-icons mr-3">group</span> Staff
                        </li>
                        <li className="flex items-center p-4 hover:bg-blue-800">
                            <span className="material-icons mr-3">book</span> Monitoring Log
                        </li>
                        <li className="flex items-center p-4 hover:bg-blue-800">
                            <span className="material-icons mr-3">agriculture</span> Vehicle
                        </li>
                        <li className="flex items-center p-4 hover:bg-blue-800">
                            <span className="material-icons mr-3">build</span> Equipment
                        </li>
                    </ul>
                </div>
                <div className="p-4 hover:bg-blue-800 flex items-center cursor-pointer">
                    <span className="material-icons mr-3">logout</span> Sign Out
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Top Navbar */}
                <nav className="bg-gray-100 border-b p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Welcome to Your Advanced Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border rounded px-4 py-2"
                        />
                        <span className="material-icons cursor-pointer">notifications</span>
                        <span className="material-icons cursor-pointer">account_circle</span>
                    </div>
                </nav>

                {/* Dashboard Widgets */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold">Users</h3>
                        <p className="text-2xl font-bold mt-4">5</p>
                    </div>
                    <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold">Revenue</h3>
                        <p className="text-2xl font-bold mt-4">21</p>
                    </div>
                    <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold">Performance</h3>
                        <p className="text-2xl font-bold mt-4">7.51%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBarComponents;
