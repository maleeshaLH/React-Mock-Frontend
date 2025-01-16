import { useState } from "react";
import {useDispatch} from "react-redux";
import {Staff} from "../../models/Staff.ts";
import {addStaff} from "../../reducers/StaffSlice.tsx";

export const StaffInputComponents = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddFieldClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const dispatch = useDispatch();


    const [Id,setId] = useState("");
    const [Name,setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Description, setDescription] = useState("");
    const [Gender, setGender] = useState("");
    const [JoinedDate, setJoinDate] = useState("");
    const [DateOfBirth, setDateOfBirth] = useState("");
    const [Role, setRole] = useState("");
    const [ContactNo, setContact] = useState("");
    const [Email, setEmail] = useState("");
    const [VehicleCode, setVehicleCode] = useState("");

    const handleSaveField = (type:string) => {
        // Logic to save the field data goes here
        setShowModal(false); // Close the modal after saving
        const NewStaff : Staff={
            Id,Name,Address,Description,Gender,JoinedDate,DateOfBirth,
            Role,ContactNo,Email,VehicleCode,
        }
        console.log("Add Field button clicked");

        switch (type){
            case "Add_FIELD":
                dispatch(addStaff(NewStaff))
                console.log(NewStaff)
                break;

        }
    };

    // const handleEditField = (fieldCode: string) => {
    //     console.log(`Edit Field: ${fieldCode}`);
    // };
    //
    // const handleDeleteField = (fieldCode: string) => {
    //     console.log(`Delete Field: ${fieldCode}`);
    // };

    // const fields = [
    //     {
    //         fieldCode: "F001",
    //         fieldName: "Field Alpha",
    //         fieldLocation: "North Sector",
    //         extentSize: "10 acres",
    //         fieldImage1: "image1-alpha.jpg",
    //         fieldImage2: "image2-alpha.jpg",
    //     }
    //
    // ];




    return (
        <>
            <div>
                {/* Main Content */}
                <div className="ml-64 w-full p-5">
                    <header className="flex justify-between items-center mb-5">
                        <h1 className="text-2xl font-bold">Staff Management</h1>
                        <button
                            onClick={handleAddFieldClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >

                            Add Field
                        </button>
                    </header>

                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-6 rounded shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Add Staff</h2>
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >

                        </button>
                        <form className={'flex'}>
                            <div>
                            <div className="mb-4">
                                <label className="block text-gray-700"> Id</label>
                                <input
                                    type="text"
                                    placeholder="Enter staff id"
                                    // value="F-111"
                                    // disabled
                                    onChange={(e) => setId(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Staff Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Staff name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Adress</label>
                                <input
                                    type="text"
                                    placeholder="Enter address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Description</label>
                                <input
                                    type="text"
                                    placeholder="Enter description"
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Gender</label>
                                <input
                                    type="text"
                                    placeholder="Enter gender"
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Joined Date</label>
                                <input type="text"
                                       placeholder="Enter joined date"
                                       onChange={(e) => setJoinDate(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            </div>
                            <div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Date of Birth</label>
                                <input
                                    type="text"
                                    placeholder="Enter birth date"
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Role</label>
                                <input
                                    type="text"
                                    placeholder="Enter role"
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Contact No</label>
                                <input
                                    type="text"
                                    placeholder="Enter contact No"
                                    onChange={(e) => setContact(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="text"
                                    placeholder="Enter email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Vehicle Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter vehicle code"
                                    onChange={(e) => setVehicleCode(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleSaveField('Add_FIELD')}
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            >
                                Save
                            </button>
                            </div>

                        </form>
                    </div>

                </div>

            )}

        </>
    );
};

export default StaffInputComponents;
