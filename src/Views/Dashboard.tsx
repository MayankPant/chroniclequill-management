import { useTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import ListItem from "../Components/ListItem";
import ServiceContext from "../context/ServiceContext";
import "../styles/Dashboard.css";
import { ReadyState } from "react-use-websocket";
import { useWebSocketContext } from "../Components/WebSocketProvider";
import searchService from "../utils/searchService";

const Dashboard = () => {
  const theme = useTheme();
  // the global storage for all microservices
  const { services, setServices } = useContext(ServiceContext);
  // the services that are rendered using the search functionality
  const [renderedServices, setRenderedServices] = useState(services);
  const {sendJsonMessage, lastJsonMessage, readyState} =
    useWebSocketContext();

  const dashboardStyles = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  // Check WebSocket connection status in readable format
  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {

    if(connectionStatus === 'Open'){
      sendJsonMessage({
        event: 'CONSUMER_TOGGLE',
        value: 0
      })
    }
  }, [connectionStatus, sendJsonMessage]);

  useEffect(() => {
    console.log("Current state of websocket connection: ", connectionStatus);
    if (typeof lastJsonMessage === "object" && connectionStatus === 'Open' && lastJsonMessage !== null) {
      const serviceName = lastJsonMessage["service_name"];
      const description = JSON.parse(lastJsonMessage["message"])["description"];

      // Update services map with new entry or updated description
      setServices((prevServices) => {
        const updatedServices = new Map(prevServices);
        updatedServices.set(serviceName, description);
        return updatedServices;
      });

      const updatedServices = searchService('', services);
      if(updatedServices !== undefined)
        setRenderedServices(updatedServices);

      console.log("Received data:", lastJsonMessage);
    }
    if(connectionStatus === 'Closed'){
      console.log("Connection to websocket closed.")
    }


  }, [lastJsonMessage, setServices, connectionStatus]);


  return (
    <div style={dashboardStyles} className="dashboard-wrapper">
      <Header
        title="Log Viewer"
        description="View and filter logs from your services"
      />
      <SearchBar renderedServices={renderedServices} setRenderedServices={setRenderedServices} />
      <ServiceList
        services={renderedServices}
        styles={dashboardStyles}
      />
    </div>
  );
};

const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="dashboard-title">
    <span className="title">{title}</span>
    <span className="description">{description}</span>
  </div>
);

const SearchBar = ({
  renderedServices,
  setRenderedServices
}: {
  renderedServices: Map<string, string>,
  setRenderedServices: React.Dispatch<React.SetStateAction<Map<string, string>>>
}) => {
  
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { services, setServices} = useContext(ServiceContext);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchTerm(event.target.value);
      
  }

  useEffect(() => {
    const updatedServices = searchService(searchTerm, services);
      console.log(`Search Term: ${searchTerm}\nUpdated Services after search: ${updatedServices}`);
      if(updatedServices !== undefined){
        setRenderedServices(updatedServices);
      }
  }, [searchTerm])


  
  return (
  

  <FormControl sx={{ marginTop: "2em", width: "100%" }} variant="outlined">
    <InputLabel htmlFor="search-bar">Search...</InputLabel>
    <OutlinedInput
      id="search-bar"
      type="search"
      sx={{ borderRadius: "30px" }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="search-bar" edge="start">
            <Search />
          </IconButton>
        </InputAdornment>
      }
      label="Search"
      value={searchTerm}
      onChange={handleSearchChange}
      
    />
  </FormControl>
)};

const ServiceList = ({
  services,
  styles,
}: {
  services: Map<string, string>;
  styles: React.CSSProperties;
}) => (
  <div style={styles} className="services">
    {Array.from(services.keys()).map((service, index) => (
      <ListItem key={index} service={service}/>
    ))}
  </div>
);

export default Dashboard;
