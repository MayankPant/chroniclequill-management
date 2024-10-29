import React, { useState } from "react";
import { useTheme } from "@mui/material";
import "../styles/ListItem.css";
import { Button } from "@mui/material";
import { useContext } from "react";
import ServiceContext from "../context/ServiceContext";

interface PropType {
  service: string;
}

const ListItem = (props: PropType) => {
  const theme = useTheme();

  const service = props.service;

  const { services, setServices } = useContext(ServiceContext);
  return (
    <div
      style={{
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "5px",
        padding: "1em",
      }}
      className="service-wrapper"
    >
      <div className="description">
        {/* <span
          style={{ fontWeight: "100", color: theme.palette.text.secondary }}
          className="total-entries"
        >
          {services.get(service)} log enteries
        </span> */}
        <span
          style={{ fontWeight: "800", fontSize: "1.5em" }}
          className="service-name"
        >
          {service}
        </span>
        <span
          style={{ fontWeight: "100", color: theme.palette.text.secondary }}
          className="description"
        >
          {services.get(service)}
        </span>
        <Button
          children={"view"}
          size="large"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.primary,
          }}
          href="/logviewer"
        />
      </div>
      <div className="service-image">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default ListItem;
