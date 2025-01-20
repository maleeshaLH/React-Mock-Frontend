import SliderBarComponents from "../components/sidebar/sidebarComponents.tsx";
import EquipmentInputComponents from "../components/equipment/EquipmentInputComponent.tsx";
import EquipmentTableComponents from "../components/equipment/EquipmentTableComponent.tsx";

export const EquipmentPages =() =>{
    return(
        <>
            <div className="flex w-4/5">
                <SliderBarComponents/>
                <div className="flex-grow p-1 w-4/5">
                    <EquipmentInputComponents/>
                    <EquipmentTableComponents/>
                </div>


            </div>
        </>
    )
};
export default EquipmentPages();
