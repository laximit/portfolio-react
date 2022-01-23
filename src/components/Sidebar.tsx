import React from "react";
import MulticodeBG from '../assets/portfolio/multicode.svg'
import '../styles/sidebar.scss'


type itemProps = {
  name: string,
  desc: string,
  link: string | undefined,
  img: string | undefined,
  imgAlt: string,
}

function SidebarItem(props: itemProps) {
  const name = props.name;
  const desc = props.desc;
  const link = props.link;
  const img = props.img;
  const imgAlt = props.imgAlt;
  
  return(
    <div className="sidebar-item">
      <a href={link}>
        <img src={img} alt={imgAlt} />
      </a>
      <span className="sidebar-item__name">{name}</span>
      <span className="sidebar-item__desc">{desc}</span>
      <div className="separator"></div>
    </div>
  )
}

function Sidebar() {
  return(
    <div className="sidebar">
      <SidebarItem 
        name="Multicode" 
        desc="A Shellscript which lets you create, open or delete local programming projects." 
        link="" 
        img={MulticodeBG} 
        imgAlt="multicode"/>
      <SidebarItem 
        name="Multicode" 
        desc="A Shellscript which lets you create, open or delete local programming projects." 
        link="" 
        img={MulticodeBG} 
        imgAlt="multicode"/>
        <SidebarItem 
        name="Multicode" 
        desc="A Shellscript which lets you create, open or delete local programming projects." 
        link="" 
        img={MulticodeBG} 
        imgAlt="multicode"/>
        <SidebarItem 
        name="Multicode" 
        desc="A Shellscript which lets you create, open or delete local programming projects." 
        link="" 
        img={MulticodeBG} 
        imgAlt="multicode"/>
    </div>
  )
}

export default Sidebar;