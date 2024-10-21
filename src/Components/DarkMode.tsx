import "../styles/DarkMode.css";
import { ChangeEventHandler } from "react";

interface ChildComponentProps {
  themeToggle: ChangeEventHandler;
}

const DarkMode = (props: ChildComponentProps) => {
  return (
    <label className="ui-switch">
      <input onChange={props.themeToggle} type="checkbox" />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
};

export default DarkMode;
