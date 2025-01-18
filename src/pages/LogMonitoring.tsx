import SliderBarComponents from "../components/sidebar/sidebarComponents.tsx";
import LogMonitoringInputComponent from "../components/logMonitoring/LogMonitoringInputComponent.tsx";
import LogMonitoringTableComponents from "../components/logMonitoring/LogMonitoringTableComponent.tsx";

export const LogMonitoring = () =>{
    return(
        <>
            <div className="flex w-4/5">
                <SliderBarComponents/>
                <div className="flex-grow p-1">
                    <LogMonitoringInputComponent/>
                    <LogMonitoringTableComponents/>
                </div>


            </div>
        </>
    )
};
export default LogMonitoring;

