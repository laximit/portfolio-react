import React from "react";
import Profile from "./Profile";
import About from "./About";
import Bio from "./Bio";
import '../styles/content.scss'

function Content() {
  return(    
    <div className="content">
      <Profile/>
      <About />
      <Bio />
    </div>
  )
}

export default Content;