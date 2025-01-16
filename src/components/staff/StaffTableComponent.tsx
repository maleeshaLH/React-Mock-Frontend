import {useSelector} from "react-redux";
import {Staff} from "../../models/Staff.ts";

export const StaffTableComponents =  () => {

    // @ts-ignore
    const staffs = useSelector((state) => state.staff);

    return (
        <>
            <div className="ml-64 w-full p-5">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-3 bg-gray-100">Id</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Name</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Address</th>
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

                            </tr>
                        ))
                    ) : (
                        <tr>
                        <td colSpan={11} className="text-center border border-gray-300 px-4 py-2">
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