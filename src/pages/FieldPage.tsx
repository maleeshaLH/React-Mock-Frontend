import SliderBarComponents from "../components/sidebar/sidebarComponents.tsx";
import FieldInputComponents from "../components/field/FieldInputComponent.tsx";
import FieldTableComponents from "../components/field/FieldTableComponents.tsx";

export const FieldManagement = () => {
    return (
        <div className="flex">
            <SliderBarComponents />
            <div className="flex-grow p-1">
                <FieldInputComponents/>
                <FieldTableComponents/>
            </div>


        </div>
    );
};

export default FieldManagement;
