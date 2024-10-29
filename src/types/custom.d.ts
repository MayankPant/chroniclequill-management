declare module '*.svg' {
    const content: any;
    export default content;
}

interface WebSocketMessage{
    message:string,
    service_name: string
}