
import '../types/custom.d.ts'
import chronicleLogo from '../assets/chroniclequill.svg'
import DarkMode from "./DarkMode";
import '../styles/NavBar.css'
import NavItem from "./NavItem";
import { useTheme } from "@mui/material";
import { ChangeEventHandler } from "react";

type PropType = {
    logo: string,
    title: string,
}

const Logo = ({ logo, title}: PropType) => {
    return (
      <div className="logo">
        <img src={logo} alt={title} width={'48px'} height={'48px'} />
        <label>{title.toUpperCase()}</label>
      </div>
    );
  };
  interface ChildComponentProps {
    themeToggle:ChangeEventHandler<HTMLInputElement>;
}

const NavBar = (props: ChildComponentProps) => {
    const theme = useTheme();
    const navBarStyles =  {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        borderBottom: `1px ${theme.palette.text.primary} solid`
    }

    return (
        <div style={navBarStyles} className="navbar-wrapper">
            <div className="branding">
                <Logo logo={chronicleLogo} title="CHRONICLE QUILL"/>
            </div>
            <div className="navitems-wrapper">
                <NavItem navItemName="Dashboard" styles={{color: theme.palette.text.primary}} routeTo="dashboard" />
                <NavItem navItemName="Documentation" styles={{color: theme.palette.text.primary}} routeTo="documentation" />
                <NavItem navItemName="Community" styles={{color: theme.palette.text.primary}} routeTo="community"  />
                <NavItem navItemName="Sign in" styles={{backgroundColor: theme.palette.primary.main, color: theme.palette.text.primary}} routeTo="signin" />
                <DarkMode themeToggle={props.themeToggle} />
            </div>
            
        </div>
    )
}

export default NavBar;