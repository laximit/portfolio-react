import React from "react";
import '../styles/knowledge.scss'
import Title from "./Title";
import LogoBASH from '../assets/logo-bash.svg';
import LogoCS from '../assets/logo-cs.svg';
import LogoCSS from '../assets/logo-css3.svg';
import LogoHTML from '../assets/logo-html5.svg';
import LogoJAVA from '../assets/logo-java.svg';
import LogoJS from '../assets/logo-js.svg';
import LogoLINUX from '../assets/logo-linux.svg';
import LogoPYTHON from '../assets/logo-python.svg';
import LogoREACT from '../assets/logo-react.svg';
import LogoTS from '../assets/logo-typescript.svg';


type itemProps = {
  name: string,
  img: string | undefined,
  imgAlt: string,
}

function KnowledgeItem(props: itemProps) {
  const name = props.name;
  const img = props.img;
  const imgAlt = props.imgAlt;
  
  return(
    <div className="knowledge-item">
      <img src={img} alt={imgAlt} />
      <span>{name}</span>
    </div>
  )
}

function Knowledge() {
  return(
    <div className="knowledge">
      <Title title="CONHECIMENTO"/>
      <div className="knowledge-list">
        <KnowledgeItem name="Bash Shell" img={LogoBASH} imgAlt="Logo Bash"/>
        <KnowledgeItem name="C#" img={LogoCS} imgAlt="Logo C#"/>
        <KnowledgeItem name="CSS" img={LogoCSS} imgAlt="Logo Css"/>
        <KnowledgeItem name="HTML" img={LogoHTML} imgAlt="Logo Html"/>
        <KnowledgeItem name="Java" img={LogoJAVA} imgAlt="Logo Java"/>
        <KnowledgeItem name="Javascript" img={LogoJS} imgAlt="Logo Javascript"/>
        <KnowledgeItem name="Linux" img={LogoLINUX} imgAlt="Logo Linux"/>
        <KnowledgeItem name="Python" img={LogoPYTHON} imgAlt="Logo Python"/>
        <KnowledgeItem name="ReactJS" img={LogoREACT} imgAlt="Logo ReactJS"/>
        <KnowledgeItem name="Typescript" img={LogoTS} imgAlt="Logo Typescript"/>
      </div>
    </div>
  )
}

export default Knowledge;