import { createContext } from "react";
/**
 * The following context is used to get the currrent service selected
 * It is used by our filtered websocket connection to filter out logs
 * in the backend when the user is at an indivisual service.
 * 
 * 
 */

interface SelectedServiceProvider {
    selectedService: string | null,
    level: string | null,
    lines: string | null,
    setSelectedService: React.Dispatch<React.SetStateAction<string>>,
    setLevel: React.Dispatch<React.SetStateAction<string>>,
    setLines: React.Dispatch<React.SetStateAction<string>>
}
const SelectedServiceContext = createContext<SelectedServiceProvider>({
    selectedService: null,
    level: null,
    lines: null,
    setSelectedService: () => {},
    setLevel: () => {},
    setLines: () => {}
}
    
)

export default SelectedServiceContext;