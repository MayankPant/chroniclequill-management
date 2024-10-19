import NavBar from "../Components/NavBar";
import '../styles/Header.css'
import { ChangeEventHandler } from "react";
interface ChildComponentProps {
    themeToggle:ChangeEventHandler<HTMLInputElement> ;
};
const  Header = (props: ChildComponentProps) => {
    return (
        <div className="header-wrapper">
            <NavBar themeToggle = {props.themeToggle} />
        </div>
    )
}

export default Header;