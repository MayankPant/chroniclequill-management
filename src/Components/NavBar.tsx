import React, {useState} from "react";
import '../types/custom.d.ts'
import chronicleLogo from '../assets/chroniclequill.svg'
import DarkMode from "./DarkMode";
import '../styles/NavBar.css'

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
                <DarkMode />
            </div>
        </div>
    )
}

export default NavBar;