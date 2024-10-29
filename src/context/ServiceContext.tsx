import { createContext } from "react";
import React from "react";

interface ServiceProvider {
    services: Map<string, string>,
    setServices: React.Dispatch<React.SetStateAction<Map<string, string>>>
}
const ServiceContext = createContext<ServiceProvider>({
    services: new Map(),
    setServices: () => {}
}
    
)

export default ServiceContext;