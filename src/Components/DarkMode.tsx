import "../styles/DarkMode.css";
import { ChangeEventHandler} from "react";



interface ChildComponentProps {
    themeToggle: ChangeEventHandler;
}

const DarkMode = (props: ChildComponentProps) => {
  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={props.themeToggle}
          
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};

export default DarkMode;
