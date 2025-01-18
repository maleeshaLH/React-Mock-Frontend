import { useState } from "react";
import {useDispatch} from "react-redux";
import {LogMonitoring} from "../../models/LogMonitoring.ts";
import {addLogMonitoring} from "../../reducers/LogMonitoringSlice.tsx";

export const LogInputComponents = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddFieldClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const dispatch = useDispatch();

    const [LogCode,setLogCode] = useState("");
    const [LogDate, setLogData] = useState("");
    const [Observation, setObservation] = useState("");
    const [Image, setImage] = useState("");
    const [FieldCode, setFieldCode] = useState("");
    const [CropCode, setCropCode] = useState("");
    const [StaffId, setStaffId] = useState("");

    const handleSaveField = (type:string) => {
        // Logic to save the field data goes here
        setShowModal(false); // Close the modal after saving

        const NewLog :LogMonitoring = {
            LogCode,LogDate,Observation,Image,FieldCode,
            CropCode,StaffId
        }
        console.log("Add Field button clicked");

        switch (type){
            case "Add_FIELD":
                dispatch(addLogMonitoring(NewLog))
                console.log(NewLog)
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
                        <h1 className="text-2xl font-bold">Monitoring Log Management</h1>
                        <button
                            onClick={handleAddFieldClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >

                            Add Monitoring Log
                        </button>
                    </header>

                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-6 rounded shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Add Monitoring Log</h2>
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >

                        </button>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Log Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter Log code"
                                    // value="F-111"
                                    // disabled
                                    onChange={(e) => setLogCode(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Log Date</label>
                                <input
                                    type="text"
                                    placeholder="Enter log date"
                                    onChange={(e) => setLogData(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Observation</label>
                                <input
                                    type="text"
                                    placeholder="Enter observation"
                                    onChange={(e) => setObservation(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Image </label>
                                <input type="file"
                                       onChange={(e) => setImage(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Filed Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter field code"
                                    onChange={(e) => setFieldCode(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Crop Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter crop code"
                                    onChange={(e) => setCropCode(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Staff Id</label>
                                <input
                                    type="text"
                                    placeholder="Enter staff id"
                                    onChange={(e) => setStaffId(e.target.value)}
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

                        </form>
                    </div>

                </div>

            )}

        </>
    );
};

export default LogInputComponents;
