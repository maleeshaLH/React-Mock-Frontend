import {useDispatch, useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {deleteVehicle} from "../../reducers/VehicleSlice.tsx";
import {Vehicle} from "../../models/Vehicle.ts";

export const VehicleTableComponents =  () => {

    // @ts-ignore
    const vehicles = useSelector((state) => state.vehicle);
    const dispatch = useDispatch();


    const handleDelete = (id: string) => {

        if (window.confirm("Are you sure you want to delete this vehicle?")) {
            // @ts-ignore
            dispatch(deleteVehicle(id));
        }
    };

    return (
        <>
            <div className="ml-64 w-full p-5">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-3 bg-gray-100">Vehicle Code</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">License Plate</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Category</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">FuelType</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Status</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Remark</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vehicles.length > 0 ? (
                        vehicles.map((vehicle: Vehicle) => (
                            <tr key={vehicle.VehicleCode} className="hover:bg-gray-100">
                                <td className="custome-table text-center">{vehicle.VehicleCode}</td>
                                <td className="custome-table text-center">{vehicle.LicensePlate}</td>
                                <td className="custome-table text-center">{vehicle.Category}</td>
                                <td className="custome-table text-center">{vehicle.FuelType}</td>
                                <td className="custome-table text-center">{vehicle.Status}</td>
                                <td className="custome-table text-center">{vehicle.Remark}</td>

                                <td className="custome-table text-center">
                                    <button
                                        // onClick={() => handleUpdate(field.fieldCode)}
                                        className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        <FontAwesomeIcon icon={faPen}/>

                                    </button>
                                    <button
                                        onClick={() => handleDelete(vehicle.VehicleCode)}
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
                                No Vehicle Available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default VehicleTableComponents;