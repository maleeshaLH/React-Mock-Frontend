import SliderBarComponents from "../components/sidebar/sidebarComponents.tsx";
import CropInputComponent from "../components/crop/CropInputComponent.tsx";
import CropTableComponents from "../components/crop/CropTableComponent.tsx";

export  const CropManagement =() => {
    return (
        <>
            <div className="flex w-4/5">
                <SliderBarComponents/>
                <div className="flex-grow p-1">
                <CropInputComponent/>
                    <CropTableComponents />
                </div>


            </div>
        </>
    )
};
export default CropManagement;