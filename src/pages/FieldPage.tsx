import SliderBarComponents from "../components/sidebar/sidebarComponents.tsx";
import FieldInputComponents from "../components/field/FieldInputComponent.tsx";
import FieldTableComponents from "../components/field/FieldTableComponents.tsx";

export const FieldManagement = () => {
    return (
        <div className="flex w-4/5">
            <SliderBarComponents />
            <div className="flex-grow p-1 w-4/5">
                <FieldInputComponents/>
                <FieldTableComponents/>
            </div>


        </div>
    );
};

export default FieldManagement;
