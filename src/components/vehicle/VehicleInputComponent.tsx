import { useState } from "react";
import {useDispatch} from "react-redux";
import {Vehicle} from "../../models/Vehicle.ts";
import {addVehicle} from "../../reducers/VehicleSlice.tsx";

export const VehicleInputComponents = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddFieldClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const dispatch = useDispatch();

    const [VehicleCode, setVehicleCode] = useState("");
    const [LicensePlate, setLicensePlate] = useState("");
    const [Category, setCategory] = useState("");
    const [FuelType, setFuelType] = useState("");
    const [Status, setStatus] = useState("");
    const [Remark, setRemark] = useState("");


    const handleSave = (type:string) => {
        // Logic to save the field data goes here
        setShowModal(false); // Close the modal after saving
        const newVehicle:Vehicle ={
           VehicleCode,LicensePlate,Category,FuelType,
            Status,Remark,
        };
        console.log("Add Vehicle button clicked");

        switch (type){
            case "Add_VEHICLE":
                dispatch(addVehicle(newVehicle))
                console.log(newVehicle)
                // console.log(crops)
                break;

        }
    };


    return (
        <>
            <div>
                {/* Main Content */}
                <div className="ml-64 w-full p-5">
                    <header className="flex justify-between items-center mb-5">
                        <h1 className="text-2xl font-bold">Vehicle Management</h1>
                        <button
                            onClick={handleAddFieldClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >

                            Add Vehicle
                        </button>
                    </header>

                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-6 rounded shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Add Vehicle</h2>
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >

                        </button>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Vehicle Code</label>
                                <input
                                    type="text"
                                    placeholder="vehicle code"
                                    // value="F-111"
                                    // disabled
                                    onChange={(e) => setVehicleCode(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">License Plate</label>
                                <input
                                    type="text"
                                    placeholder="Enter license plate"
                                    onChange={(e) => setLicensePlate(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Category </label>
                                <input
                                    type="text"
                                    placeholder="Enter Category"
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">FuelType</label>
                                <input
                                    type="text"
                                    placeholder="Enter Fuel Type"
                                    onChange={(e) => setFuelType(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Status</label>
                                <input type="text"
                                       onChange={(e) => setStatus(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Remark </label>
                                <input type="text"
                                       onChange={(e) => setRemark(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleSave('Add_VEHICLE')}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Save
                            </button>

                        </form>
                    </div>

                </div>

            )}

        </>
    );
};

export default VehicleInputComponents;
