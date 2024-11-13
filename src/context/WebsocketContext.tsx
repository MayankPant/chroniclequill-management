import { createContext } from 'react';


// Define the context type


const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

export default WebSocketContext;