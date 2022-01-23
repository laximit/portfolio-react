import React from "react";
import Title from "./Title";
import '../styles/bio.scss'

type itemProps = {
  year: string,
  desc: string
}

function BioItem(props: itemProps) {
  const year = props.year;
  const desc = props.desc;

  return(
    <div className="bio-item">
      <span className="bio-item__year">{year}</span>
      <span className="bio-item__desc">{desc}</span>
    </div>
  )
}

function Bio() {
  return(
    <div className="bio">
      <Title title="BIO"/>
      <BioItem year="2001" desc="Nasceu em Espirito Santo, Brasil."/>
      <BioItem year="2017" desc="Se formou no ensino médio e começou a aprender suas primeiras linguagens de programação."/>
      <BioItem year="2019" desc="Começou a trabalhar na empresa Lucas Solutions como um programador junior em C#."/>
      <BioItem year="2020" desc="Começou a trabalhar na empresa VisionTI como Técnico de Teleinformática."/>
      <BioItem year="2021" desc="Iniciou o curso de Análise e Desenvolvimento de Sistemas na Universidade de Vila Velha (UVV)."/>
    </div>
  )
}

export default Bio;