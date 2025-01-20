import {useDispatch, useSelector} from "react-redux";
import {LogMonitoring} from "../../models/LogMonitoring.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {deleteLogMonitoring} from "../../reducers/LogMonitoringSlice.tsx";

export const LogMonitoringTableComponents =  () => {

    // @ts-ignore
    const logs = useSelector((state) => state.logMonitoring);
    const dispatch = useDispatch();
    const handleDelete = (logCode: string) => {

        if (window.confirm("Are you sure you want to delete this logs ?")) {
            // @ts-ignore
            dispatch(deleteLogMonitoring(logCode));
        }
    };

    return (
        <>
            <div className="ml-64 w-full p-5">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-3 bg-gray-100">Log Code</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Log Date</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Observation</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Image</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Field Code</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Crop Code</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Staff Id</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {logs.length > 0 ? (
                        logs.map((log: LogMonitoring) => (
                            <tr key={log.LogCode} className="hover:bg-gray-100">
                                <td className="custome-table text-center">{log.LogCode}</td>
                                <td className="custome-table text-center">{log.LogDate}</td>
                                <td className="custome-table text-center">{log.Observation}</td>
                                <td className="custome-table text-center">
                                    <img
                                        src={log.Image}
                                        alt="Field Image 1"
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="custome-table text-center">{log.FieldCode}</td>
                                <td className="custome-table text-center">{log.CropCode}</td>
                                <td className="custome-table text-center">{log.StaffId}</td>
                                <td className="custome-table text-center">
                                    <button
                                        // onClick={() => handleUpdate(field.fieldCode)}
                                        className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        <FontAwesomeIcon icon={faPen}/>

                                    </button>
                                    <button
                                        onClick={() => handleDelete(log.LogCode)}
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
                                No Log Details Available
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default LogMonitoringTableComponents;