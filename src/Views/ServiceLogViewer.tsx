import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
} from "@mui/material";
import LogEntry from "../Components/LogEntry";
import { useContext } from "react";
import SelectedServiceContext from "../context/SelectedServiceContext";
import { SelectChangeEvent } from "@mui/material";
import useWebSocket from "react-use-websocket";
import '../styles/ServiceLogViewer.css'

const ServiceLogViewer = () => {
  const [level, setLevel] = useState("debug");
  const [lines, setLines] = useState("all");
  const { selectedService } = useContext(SelectedServiceContext);
  const [logs, setLogs] = useState<Array<ServiceMessage>>([]);

  const socketUrl = "ws://0.0.0.0:8001/serviceLogs/";

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(socketUrl);

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value);
  };

  const handleLineChange = (event: SelectChangeEvent) => {
    setLines(event.target.value);
  };

  useEffect(() => {
    // narrowing types for handling unknown data types
    if (lastJsonMessage instanceof Array) {
      console.log("Recieved logs: ", lastJsonMessage);
      const log_data = JSON.parse(lastJsonMessage[0]);
      console.log("Parsed log data: ", log_data);
      setLogs((prev: Array<ServiceMessage>) => [
        {
          message: log_data["message"],
          time: log_data["timestamp"],
          level: log_data["level"],
        },
        ...prev
      ]);
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    sendJsonMessage({
      event: "FILTER",
      service: selectedService,
      level: level,
      lines: lines,
    });
  }, [level, lines, selectedService, sendJsonMessage]);

  useEffect(() => {
    sendJsonMessage({
      event: 'CONSUMER_TOGGLE',
      value: 1
    })
  }, [])

  const theme = useTheme();

  return (
    <div
      style={{
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
      }}
      className="log-viewer"
    >
      <div className="service-name">
        <span style={{ fontWeight: "900", fontSize: "2em" }}>
          {selectedService}
        </span>
        <span>Log</span>
        <div className="log-filter">
          <FormControl sx={{ minWidth: 120 }}>
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

          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="lines-selector-label">Lines</InputLabel>
            <Select
              labelId="lines-selector-label"
              id="lines-selector"
              value={lines}
              label="Lines"
              onChange={handleLineChange}
            >
              <MenuItem defaultChecked={true} value={"all"}>
                All
              </MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={500}>500</MenuItem>
              <MenuItem value={1000}>1000</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Stack spacing={2} sx={{height: '600px', overflow: 'auto'}}>
          {logs.map((log, index) => (
            <LogEntry
              key={index}
              message={log.message}
              transactionTime={log.time}
              transactionLevel={log.level}
            />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default ServiceLogViewer;
