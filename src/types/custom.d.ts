declare module '*.svg' {
    const content: any;
    export default content;
}

interface WebSocketMessage{
    message:string,
    service_name: string,
    type: string
}

type ServiceSpecifiWebSocketMessage = 
    | { type: 'Connect'; payload: { service: string, lines: string, level: string } }
    | { type: 'Disconnect' }
    | { type: 'NewMessage'; payload: { message: string; service: string, level: string } };


type LogEntry = {
    message: string,
    transactionTime?: string,
    transactionLevel: string,
    transactionType?: string
}

type ServiceMessage = {
    message: string,
    time: string,
    level: string

}

// Define types for incoming and outgoing messages
interface IncomingMessage {
    message:string,
    service_name: string,
    type: string
}

interface OutgoingMessage {
  type: string;
  payload: any;
}
