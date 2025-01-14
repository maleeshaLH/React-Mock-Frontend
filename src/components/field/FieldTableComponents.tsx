import {Field} from "../../models/Filed.ts";
import {useSelector} from "react-redux";

export const FieldTableComponents =  () => {

    // @ts-ignore
    const fields = useSelector((state) => state.field);

    return (
        <>
            <div className="ml-64 w-full p-5">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr>
                        <th className="border border-gray-300 p-3 bg-gray-100">Field Code</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Field Name</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Field Location</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Extent Size</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Field Image 1</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Field Image 2</th>
                        <th className="border border-gray-300 p-3 bg-gray-100">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fields.length > 0 ? (
                        fields.map((field: Field) => (
                            <tr key={field.fieldCode} className="hover:bg-gray-100">
                                <td className="custome-table text-center">{field.fieldCode}</td>
                                <td className="custome-table text-center">{field.fieldName}</td>
                                <td className="custome-table text-center">{field.fieldLocation}</td>
                                <td className="custome-table text-center">{field.extentSize}</td>
                                <td className="custome-table text-center">
                                    <img
                                        src={field.fieldImage01}
                                        alt="Field Image 1"
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="border border-gray-300 p-3">
                                    <img
                                        src={field.fieldImage02}
                                        alt="Field Image 2"
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>


                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center border border-gray-300 px-4 py-2">
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


export default FieldTableComponents;