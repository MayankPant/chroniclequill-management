interface WebSocketConnection{
  establishConnection: () => WebSocket  | Error;
}



class Connection implements WebSocketConnection {
  public websocket: WebSocket | null = null;  // Set initial value to null

  constructor() {
    const websocketUrl = process.env.REACT_APP_WEBSOCKET_CONNECTION_URL;
    if (websocketUrl) {
      this.websocket = new WebSocket(websocketUrl);
    }
  }

  establishConnection() {
    if (this.websocket) {
      return this.websocket;
    }
    throw new Error('WebSocket connection not established');
  }
}

export default Connection;
