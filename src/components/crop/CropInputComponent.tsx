import { useState } from "react";
import {useDispatch} from "react-redux";
import {Crop} from "../../models/Crop.ts";
import {addCrop} from "../../reducers/CropSlice.tsx";

export const CropInputComponents = () => {
    const [showModal, setShowModal] = useState(false);

    const handleAddFieldClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const dispatch = useDispatch();


    const [CropCode, setCropCode] = useState("");
    const [CropName, setCropName] = useState("");
    const [ScientificName,setScientificName] = useState("");
    const [Category, setCategory] = useState("");
    const [Season, setSeason] = useState("");
    const [Image, setImage] = useState("");
    const [FieldCode, setFieldCode] = useState("");



    const handleSaveCrop = (type:string) => {
        // Logic to save the field data goes here
        setShowModal(false); // Close the modal after saving
        const newCrop:Crop ={
           CropCode,CropName,ScientificName,Category,
            Season,Image,FieldCode
        };
        console.log("Add Field button clicked");

        switch (type){
            case "Add_FIELD":
                dispatch(addCrop(newCrop))
                console.log(newCrop)
                // console.log(crops)
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
                        <h1 className="text-2xl font-bold">Crop Management</h1>
                        <button
                            onClick={handleAddFieldClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >

                            Add Crop
                        </button>
                    </header>

                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white w-96 p-6 rounded shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Add Crop</h2>
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >

                        </button>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Crop Code</label>
                                <input
                                    type="text"
                                    placeholder="crop code"
                                    // value="F-111"
                                    // disabled
                                    onChange={(e) => setCropCode(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded bg-gray-100"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Crop Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter crop name"
                                    onChange={(e) => setCropName(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Scientific Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Scientific Name"
                                    onChange={(e) => setScientificName(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Category</label>
                                <input
                                    type="text"
                                    placeholder="Enter category"
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full mt-1 px-3 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Season</label>
                                <input type="text"
                                       onChange={(e) => setSeason(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Image </label>
                                <input type="file"
                                       onChange={(e) => setImage(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Field code </label>
                                <input type="text"
                                       onChange={(e) => setFieldCode(e.target.value)}
                                       className="w-full mt-1 px-3 py-2 border rounded"/>
                            </div>
                            <button
                                type="button"
                                onClick={() => handleSaveCrop('Add_FIELD')}
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

export default CropInputComponents;
