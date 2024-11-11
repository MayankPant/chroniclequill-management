interface WebSocketConnection{
  establishConnection: () => WebSocket  | Error;
}



class Connection implements WebSocketConnection {
  public websocket: WebSocket | null = null;  // Set initial value to null
  public WS_URL: string | null = null;
  constructor(url?:string | null) {
    if(url)
      this.WS_URL = url;

    const websocketUrl = url ??  process.env.REACT_APP_WEBSOCKET_CONNECTION_URL;
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

  reconnect(max_retries: number, base_delay: number){
    var retries: number = 0;
    if (retries < max_retries) {
      // Calculate delay with exponential backoff
      const delay = base_delay * Math.pow(2, retries);
      console.log(`Reconnecting in ${delay}ms...`);

      setTimeout(() => {
          retries++;
          this.websocket =  new Connection(this.WS_URL).establishConnection(); // Retry the connection
      }, delay);
  } else {
      console.log("Max retries reached. Giving up.");
  }
}

  sendMessage(message: string){
    if(this.websocket?.OPEN)
      this.websocket?.send(message);
  }
}

export default Connection;
