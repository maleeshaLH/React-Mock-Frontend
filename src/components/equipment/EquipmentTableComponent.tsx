import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {deleteEquipment} from "../../reducers/EquipmentSlice.tsx";
import {Equipment} from "../../models/Equipment.ts";

export const EquipmentTableComponents =  () => {

    // @ts-ignore
    const equipments = useSelector((state) => state.equipment);
    const dispatch = useDispatch();


    const handleDelete = (id: string) => {

        if (window.confirm("Are you sure you want to delete this equipment?")) {
            // @ts-ignore
            dispatch(deleteEquipment(id));
        }
    };

    return (
        <>
            <div className="ml-64 w-full p-5">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-3 bg-gray-100">Equipment Id</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Equipment Name</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Equipment Type</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Status</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Field Code</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Staff Id</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {equipments.length > 0 ? (
                        equipments.map((equipment: Equipment) => (
                            <tr key={equipment.EquipmentId} className="hover:bg-gray-100">
                                <td className="custome-table text-center">{equipment.EquipmentId}</td>
                                <td className="custome-table text-center">{equipment.EquipmentName}</td>
                                <td className="custome-table text-center">{equipment.EquipmentType}</td>
                                <td className="custome-table text-center">{equipment.Status}</td>
                                <td className="custome-table text-center">{equipment.FieldCode}</td>
                                <td className="custome-table text-center">{equipment.StaffId}</td>

                                <td className="custome-table text-center">
                                    <button
                                        // onClick={() => handleUpdate(field.fieldCode)}
                                        className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        <FontAwesomeIcon icon={faPen}/>

                                    </button>
                                    <button
                                        onClick={() => handleDelete(equipment.EquipmentId)}
                                        className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>

                                    </button>
                                </td>

                            </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan={7} className="text-center border border-gray-300 px-4 py-2">
                                No Equipment Available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default EquipmentTableComponents;