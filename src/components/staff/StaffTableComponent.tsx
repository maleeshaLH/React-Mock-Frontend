import {useDispatch, useSelector} from "react-redux";
import {Staff} from "../../models/Staff.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteStaff} from "../../reducers/StaffSlice.tsx";

export const StaffTableComponents =  () => {

    // @ts-ignore
    const staffs = useSelector((state) => state.staff);
    const dispatch = useDispatch();
    const handleDelete = (Id: string) => {

        if (window.confirm("Are you sure you want to delete this staff member ?")) {
            // @ts-ignore
            dispatch(deleteStaff(Id));
        }
    };

    return (
        <>
            <div className="ml-64 w-full p-5">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-3 bg-gray-100">Id</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Name</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Address</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Description</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Gender</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Join Date</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Birth Day</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Role</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Contact No</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Email</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Vehicle Code</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {staffs.length > 0 ? (
                        staffs.map((staff: Staff) => (
                            <tr key={staff.Id} className="hover:bg-gray-100">
                                <td className="custome-table text-center">{staff.Id}</td>
                                <td className="custome-table text-center">{staff.Name}</td>
                                <td className="custome-table text-center">{staff.Address}</td>
                                <td className="custome-table text-center">{staff.Description}</td>
                                <td className="custome-table text-center">{staff.Gender}</td>
                                <td className="custome-table text-center">{staff.JoinedDate}</td>
                                <td className="custome-table text-center">{staff.DateOfBirth}</td>
                                <td className="custome-table text-center">{staff.Role}</td>
                                <td className="custome-table text-center">{staff.ContactNo}</td>
                                <td className="custome-table text-center">{staff.Email}</td>
                                <td className="custome-table text-center">{staff.VehicleCode}</td>
                                <td className="custome-table text-center">
                                    <button
                                        // onClick={() => handleUpdate(field.fieldCode)}
                                        className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        <FontAwesomeIcon icon={faPen}/>

                                    </button>
                                    <button
                                        onClick={() => handleDelete(staff.Id)}
                                        className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>

                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={12} className="text-center border border-gray-300 px-4 py-2">
                                No Staff Details Available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default StaffTableComponents;