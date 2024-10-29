import { useTheme } from "@mui/material";
import "../styles/Dashboard.css";
import { InputLabel, OutlinedInput } from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import { FormControl } from "@mui/material";
import { Search } from "@mui/icons-material";
import ListItem from "../Components/ListItem";
import Connection from "../Components/WebSocket";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ServiceContext from "../context/ServiceContext";

/**
 *  We define a websocket connection which connects to the backend to
 *  take in all of the logs. The dashboard the uses the service names
 * of each of those logs to create a mapping which we use to see a list
 * of all the services connected to the logging service. This data is displayed
 * in the backend.
 */
const websocket = new Connection().establishConnection();

websocket.onopen = () => {
  console.log("Connected to WebSocket");
};

const Dashboard = () => {
  const theme = useTheme();
  const styles = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  /**
   * since changing the content of a Map object does not change
   * the reference of the map object, react does not consider it
   * a change of value and hence does not re-render the component.
   * Therefore we manually try to re-render it with a version state
   */

  const { services, setServices } = useContext(ServiceContext);

  websocket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    setServices((prevService) =>
      new Map(prevService).set(
        data["service_name"],
        JSON.parse(data["message"])["description"]
      )
    );

    console.log("Recieved data: ", data);
  };

  websocket.onclose = () => {
    console.log("Disconnected from WebSocket");
  };

  return (
    <div style={styles} className="dashboard-wrapper">
      <div className="dashboard-title">
        <span className="title">Log Viewer</span>
        <span className="description">
          View and filter logs from your services
        </span>
      </div>

      <FormControl sx={{ marginTop: "2em", width: "100%" }} variant="outlined">
        <InputLabel htmlFor="search-bar">Search....</InputLabel>
        <OutlinedInput
          id="search-bar"
          type="search"
          sx={{ borderRadius: "30px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="search-bar" edge="start">
                {<Search />}
              </IconButton>
            </InputAdornment>
          }
          label="Search"
        />
      </FormControl>

      <div style={styles} className="services">
        {Array.from(services.keys()).map((key: string, index: number) => {
          return <ListItem key={index} service={key} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
