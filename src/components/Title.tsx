import React from "react";

type itemProps = {
  title: string
}

function Title(props: itemProps) {
  const title = props.title;
  return(
    <div className="section-title">
      <span>{title}</span>  
      <div className="separator"></div>
    </div>
  )
}

export default Title;