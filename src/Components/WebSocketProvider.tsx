import useWebSocket from "react-use-websocket";
import WebSocketContext from "../context/WebsocketContext";
import { useContext } from "react";

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
    const { sendMessage, sendJsonMessage, lastJsonMessage, lastMessage, readyState } = useWebSocket<IncomingMessage>("ws://0.0.0.0:8001/log/", {
        share: true,
        shouldReconnect: () => true, // Reconnect on close
    });

    // Provide the WebSocket values to the entire app
    const contextValue = {
        sendMessage,
        lastMessage,
        readyState,
        sendJsonMessage,
        lastJsonMessage
    };

    return (
        <WebSocketContext.Provider value={contextValue}>
            {children}
        </WebSocketContext.Provider>
    );
};


// Custom hook to use the WebSocket context
export const useWebSocketContext = (): WebSocketContextType => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error('useWebSocketContext must be used within a WebSocketProvider');
    }
    return context;
};
