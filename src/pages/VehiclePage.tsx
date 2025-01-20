import SliderBarComponents from "../components/sidebar/sidebarComponents.tsx";
import VehicleInputComponents from "../components/vehicle/VehicleInputComponent.tsx";
import VehicleTableComponents from "../components/vehicle/VehicleTableComponent.tsx";

export const VehiclePage =() =>{
    return(
        <>
            <div className="flex w-4/5">
                <SliderBarComponents/>
                <div className="flex-grow p-1 w-4/5">
                    <VehicleInputComponents/>
                    <VehicleTableComponents />
                </div>


            </div>
        </>
    )
}
export default VehiclePage;