import React, { useState } from "react";
import { useTheme } from "@mui/material";
import "../styles/ListItem.css";
import {Button} from "@mui/material";


interface PropType {
  service: object;
}

const ListItem = (props: PropType) => {
  const theme = useTheme();
  const service: object = props.service;
  return (
    <div style={{border: `1px solid ${theme.palette.secondary.main}`, borderRadius: '5px' , padding: '1em'}} className="service-wrapper">
      <div className="description">
        <span style={{fontWeight: '100'}} className="total-entries">{"30"} log enteries</span>
        <span style={{fontWeight: '800', fontSize: '1.5em'}} className="service-name">frontend-production</span>
        <span style={{fontWeight: '100',}} className="description">This is the main web application for our product. Its the first thing most of our users see.</span>
        <Button children={'view'} size="large" sx={{backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary}} href="/logviewer"  />
      </div>
      <div className="service-image">
        <img src="" alt=""/>
      </div>
    </div>
  );
};

export default ListItem;