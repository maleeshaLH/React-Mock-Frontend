import { useState } from "react";
import {useDispatch} from "react-redux";
import {Equipment} from "../../models/Equipment.ts";
import {addEquipment} from "../../reducers/EquipmentSlice.tsx";

export const EquipmentInputComponents = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddFieldClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const dispatch = useDispatch();

    const [EquipmentId, setEquipmentId] = useState("");
    const [EquipmentName, setEquipmentName] = useState("");
    const [EquipmentType, setEquipmentType] = useState("");
    const [Status, setStatus] = useState("");
    const [FieldCode, setFieldCode] = useState("");
    const [StaffId, setStaffId] = useState("");



    const handleSave = (type:string) => {
        // Logic to save the field data goes here
        setShowModal(false); // Close the modal after saving
        const newEquipment:Equipment ={
            EquipmentId,EquipmentName,EquipmentType,
            Status,FieldCode,StaffId
        };
        console.log("Add Equipment button clicked");

        switch (type){
            case "Add_EQUIPMENT":
                dispatch(addEquipment(newEquipment))
                console.log(newEquipment)
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
                        <h1 className="text-2xl font-bold">Equipment Management</h1>
                        <button
                            onClick={handleAddFieldClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add Equipment
                        </button>
                    </header>

                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-6 rounded shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Add Equipment</h2>
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >

                        </button>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Equipment Id </label>
                                <input
                                    type="text"
                                    placeholder="Equipment Id"
                                    // value="F-111"
                                    // disabled
                                    onChange={(e) => setEquipmentId(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Equipment Name </label>
                                <input
                                    type="text"
                                    placeholder="Enter Equipment Name"
                                    onChange={(e) => setEquipmentName(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Equipment Type</label>
                                <input
                                    type="text"
                                    placeholder="Enter Equipment Type"
                                    onChange={(e) => setEquipmentType(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Status</label>
                                <input
                                    type="text"
                                    placeholder="Enter Status"
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Field Code</label>
                                <input type="text"
                                       onChange={(e) => setFieldCode(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Staff Id </label>
                                <input type="text"
                                       onChange={(e) => setStaffId(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleSave('Add_EQUIPMENT')}
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

export default EquipmentInputComponents;
