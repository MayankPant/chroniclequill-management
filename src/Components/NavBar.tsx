import React, {useState} from "react";
import '../types/custom.d.ts'
import chronicleLogo from '../assets/chroniclequill.svg'
import DarkMode from "./DarkMode";
import '../styles/NavBar.css'
import NavItem from "./NavItem";

type PropType = {
    logo: string,
    title: string
}
const Logo = ({ logo, title }: PropType) => {
    return (
      <div className="logo">
        <img src={logo} alt={title} width={'48px'} height={'48px'} />
        <label>{title.toUpperCase()}</label>
      </div>
    );
  };


const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="branding">
                <Logo logo={chronicleLogo} title="CHRONICLE QUILL"/>
            </div>
            <div className="navitems-wrapper">
                <NavItem navItemName="Dashboard" styles={{color: 'var(--font-color)'}} routeTo="dashboard" />
                <NavItem navItemName="Documentation" styles={{color: 'var(--font-color)'}} routeTo="documentation" />
                <NavItem navItemName="Community" styles={{color: 'var(--font-color)'}} routeTo="community"  />
                <NavItem navItemName="Sign in" styles={{backgroundColor: "var(--primary-button-color)", color: 'var(--font-color)'}} routeTo="signin" />
                <DarkMode />
            </div>
            
        </div>
    )
}

export default NavBar;