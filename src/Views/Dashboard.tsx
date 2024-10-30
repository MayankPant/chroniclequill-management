import { useTheme } from "@mui/material";
import { useContext } from "react";
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import ListItem from "../Components/ListItem";
import Connection from "../Components/WebSocket";
import ServiceContext from "../context/ServiceContext";
import "../styles/Dashboard.css";

const websocket = new Connection().establishConnection();
websocket.onopen = () => {
  console.log("Connected to WebSocket");
};

const Dashboard = () => {
  const theme = useTheme();
  const { services, setServices } = useContext(ServiceContext);

  const dashboardStyles = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  websocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const serviceName = data["service_name"];
    const description = JSON.parse(data["message"])["description"];

    // Update services map with new entry or updated description
    setServices((prevServices) => {
      const updatedServices = new Map(prevServices);
      updatedServices.set(serviceName, description);
      return updatedServices;
    });

    console.log("Received data:", data);
  };

  websocket.onclose = () => {
    console.log("Disconnected from WebSocket");
  };

  return (
    <div style={dashboardStyles} className="dashboard-wrapper">
      <Header
        title="Log Viewer"
        description="View and filter logs from your services"
      />
      <SearchBar />
      <ServiceList services={services} styles={dashboardStyles} />
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

const SearchBar = () => (
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
    />
  </FormControl>
);

const ServiceList = ({
  services,
  styles,
}: {
  services: Map<string, string>;
  styles: React.CSSProperties;
}) => (
  <div style={styles} className="services">
    {Array.from(services.keys()).map((service, index) => (
      <ListItem key={index} service={service} />
    ))}
  </div>
);

export default Dashboard;
