import React from "react";
import Profile from "./Profile";
import About from "./About";
import Bio from "./Bio";
import Knowledge from "./Knowledge";
import '../styles/content.scss'

function Content() {
  return(    
    <div className="content">
      <Profile/>
      <About />
      <Bio />
      <Knowledge />
    </div>
  )
}

export default Content;