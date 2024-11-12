import { useTheme } from "@mui/material";
import "../styles/ListItem.css";
import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import ServiceContext from "../context/ServiceContext";
import SelectedServiceContext from "../context/SelectedServiceContext";
import { useNavigate } from "react-router-dom";
import { SendJsonMessage, WebSocketLike } from "react-use-websocket/dist/lib/types";

interface PropType {
  service: string;
  websocket?:  () => WebSocketLike | null
}

const ListItem = (props: PropType) => {
  const theme = useTheme();


  const service = props.service;
  const navigate = useNavigate();
  const {
    setSelectedService,
    setLevel,
    setLines,
  } = useContext(SelectedServiceContext);

  

  function setServiceAndRoute() {
    setSelectedService(service);
    setLevel('all');
    setLines('all');
    navigate("/logviewer");
  }

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
          onClick={setServiceAndRoute}
        />
      </div>
      <div className="service-image">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default ListItem;
