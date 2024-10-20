
import React from "react";
import { useTheme } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "../styles/ServiceLogViewer.css";
import LogEntry from "../Components/LogEntry";

const ServiceLogViewer = () => {
  const [level, setLevel] = React.useState("all");
  const [lines, setLines] = React.useState("all");

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value);
  };

  const handleLineChange = (event: SelectChangeEvent) => {
    setLines(event.target.value);
  };

  const theme = useTheme();

  return (
    <div style={{color: theme.palette.text.primary}} className="log-viewer">
      <div className="service-name">
        <span style={{fontWeight:'900', fontSize: '2em'}}>frontend-production</span>
        <span>Log</span>
        <div className="log-filter">
          <FormControl sx={{minWidth: 120 }}>
            <InputLabel id="level-selector-label">Level</InputLabel>
            <Select
              labelId="level-selector-label"
              id="level-selector"
              value={level}
              label="Level"
              onChange={handleLevelChange}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"info"}>Info</MenuItem>
              <MenuItem value={"debug"}>Debug</MenuItem>
              <MenuItem value={"warning"}>Warning</MenuItem>
              <MenuItem value={"error"}>Error</MenuItem>
            </Select>
          </FormControl>


          <FormControl sx={{minWidth: 120 }}>
            <InputLabel id="level-selector-label">Lines</InputLabel>
            <Select
              labelId="lines-selector-label"
              id="lines-selector"
              value={lines}
              label="lines"
              onChange={handleLineChange}
            >
              <MenuItem defaultChecked={true} value={"all"}>All</MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={500}>500</MenuItem>
              <MenuItem value={1000}>1000</MenuItem>
            </Select>
          </FormControl>
        </div>
        <LogEntry />
      </div>
    </div>
  );
};

export default ServiceLogViewer;
