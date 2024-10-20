import React, { useState } from "react";
import { useTheme } from "@mui/material";
import "../styles/Dashboard.css";
import { InputLabel, OutlinedInput } from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import { FormControl } from "@mui/material";
import { Search } from "@mui/icons-material";
import ListItem from "../Components/ListItem";
const Dashboard = () => {
  const theme = useTheme();
  const styles = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };
  return (
    <div style={styles} className="dashboard-wrapper">
      <div className="dashboard-title">
        <span className="title">Log Viewer</span>
        <span className="description">
          View and filter logs from your services
        </span>
      </div>

      <FormControl sx={{ marginTop: "2em", width: "80%" }} variant="outlined">
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
            <ListItem service={{}} />
      </div>
    </div>
  );
};

export default Dashboard;
