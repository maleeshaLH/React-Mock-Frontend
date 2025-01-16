import SliderBarComponents from "../components/sidebar/sidebarComponents.tsx";
import StaffInputComponents from "../components/staff/StaffInputComponent.tsx";
import {StaffTableComponents} from "../components/staff/StaffTableComponent.tsx";

export const StaffPage = () => {
    return (
        <>
            <div className="flex">
                <SliderBarComponents/>
                <div className="flex-grow p-1">
                    <StaffInputComponents/>
                    <StaffTableComponents />
                </div>


            </div>
        </>
    )
}
export default StaffPage;