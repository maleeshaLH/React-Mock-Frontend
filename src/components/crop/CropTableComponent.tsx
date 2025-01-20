import {useDispatch, useSelector} from "react-redux";
import {Crop} from "../../models/Crop.ts";
import {deleteCrop} from "../../reducers/CropSlice.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";

export const CropTableComponents =  () => {

    // @ts-ignore
    const Crops = useSelector((state) => state.crop);

    const dispatch = useDispatch();

    const handleDelete = (CropCode: string) => {

        if (window.confirm("Are you sure you want to delete this field?")) {
            // @ts-ignore
            dispatch(deleteCrop(CropCode));
        }
    };
    return (
        <>
            <div className="ml-64 w-full p-5">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-3 bg-gray-100">Crop Code</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Crop Name</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Scientific Name</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Category</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Season</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Image</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">FieldCode</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Crops.length > 0 ? (
                        Crops.map((crop: Crop) => (
                            <tr key={crop.CropCode} className="hover:bg-gray-100">
                                <td className="custome-table text-center">{crop.CropCode}</td>
                                <td className="custome-table text-center">{crop.CropName}</td>
                                <td className="custome-table text-center">{crop.ScientificName}</td>
                                <td className="custome-table text-center">{crop.Category}</td>
                                <td className="custome-table text-center">{crop.Season}</td>
                                <td className="custome-table text-center">
                                    <img
                                        src={crop.Image}
                                        alt=" Image "
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="custome-table text-center">{crop.FieldCode}</td>

                                <td className="custome-table text-center">
                                    <button
                                        // onClick={() => handleUpdate(field.fieldCode)}
                                        className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        <FontAwesomeIcon icon={faPen}/>

                                    </button>
                                    <button
                                        onClick={() => handleDelete(crop.CropCode)}
                                        className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>

                                    </button>
                                </td>

                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={8} className="text-center border border-gray-300 px-4 py-2">
                                No Field Available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default CropTableComponents;