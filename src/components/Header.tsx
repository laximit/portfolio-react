import React from "react";
import SourceIcon from '../assets/font-awesome/code-branch-solid.svg'
import SunIcon from '../assets/font-awesome/sun-solid.svg'
import MoonIcon from '../assets/font-awesome/moon-solid.svg'
import '../styles/header.scss'

function Header() {
	return (
		<div className="header">
			<img src={SourceIcon} alt="" className="header-button source-code" />
			<span>&lt;Murilo Lobos/&gt;</span>
			<img src={SunIcon} alt="" className="header-button change-theme" />
		</div>
	)
}

export default Header;
