import { useState } from "react";
import {Field} from "../../models/Filed.ts";
import {useDispatch, useSelector} from "react-redux";
import {addField} from "../../reducers/FieldSlice.tsx";

export const FieldInputComponents = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddFieldClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const dispatch = useDispatch();

    // @ts-ignore
    const fields = useSelector((state) => state.field);

    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [fieldLocation, setFieldLocation] = useState("");
    const [extentSize, setExtentSize] = useState("");
    const [fieldImage01, setFieldImage01] = useState("");
    const [fieldImage02, setFieldImage02] = useState("");

    const handleSaveField = (type:string) => {
        // Logic to save the field data goes here
        setShowModal(false); // Close the modal after saving
        const newField:Field ={
            fieldCode,fieldName,fieldLocation,extentSize,
            fieldImage01,fieldImage02
        };
        console.log("Add Field button clicked");

        switch (type){
            case "Add_FIELD":
                dispatch(addField(newField))
                console.log(newField)
                console.log(fields)
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
                        <h1 className="text-2xl font-bold">Field Management</h1>
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
                        <h2 className="text-xl font-bold mb-4">Add Field</h2>
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >

                        </button>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Field Code</label>
                                <input
                                    type="text"
                                    value="F-111"
                                    disabled
                                    onChange={(e)=>setFieldCode(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Field Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter field name"
                                    onChange={(e)=>setFieldName(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Field Location</label>
                                <input
                                    type="text"
                                    placeholder="Enter field location"
                                    onChange={(e)=>setFieldLocation(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Extent Size</label>
                                <input
                                    type="text"
                                    placeholder="Enter extent size"
                                    onChange={(e)=>setExtentSize(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Field Image 1</label>
                                <input type="file"
                                       onChange={(e)=>setFieldImage01(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Field Image 2</label>
                                <input type="file"
                                       onChange={(e)=>setFieldImage02(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded" />
                            </div>
                            <button
                                type="button"
                                onClick={()=>handleSaveField('Add_FIELD')}
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

export default FieldInputComponents;
