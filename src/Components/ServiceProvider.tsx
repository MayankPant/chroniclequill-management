import React, {  useState } from "react";
import ServiceContext from "../context/ServiceContext";

interface PropType {
    children: React.ReactElement;
}

const ServiceProvider = (props: PropType) => {
    const [services, setServices] = useState<Map<string, string>>(new Map());

    return (
        <ServiceContext.Provider value={{services, setServices}}>
            {props.children}
        </ServiceContext.Provider>
    )
}

export default ServiceProvider;