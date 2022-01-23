import React from "react";
import Profile from "./Profile";
import Bio from "./Bio";
import '../styles/content.scss'

function Content() {
  return(    
    <div className="content">
      <Profile/>
      <Bio />
    </div>
  )
}

export default Content;