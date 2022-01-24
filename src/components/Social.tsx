import React from "react";
import Title from './Title'
import '../styles/social.scss'

import LogoGithub from '../assets/font-awesome/github-square-brands.svg'
import LogoInsta from '../assets/font-awesome/instagram-brands.svg'
import LogoLinked from '../assets/font-awesome/linkedin-brands.svg'
import LogoReddit from '../assets/font-awesome/reddit-square-brands.svg'

type itemProps = {
  name: string,
  link: string,
  img: string | undefined,
  imgAlt: string,
}

function SocialItem(props: itemProps) {
  const name = props.name;
  const link = props.link;
  const img = props.img;
  const imgAlt = props.imgAlt;

  return(
    <a href={link}>
      <img src={img} alt={imgAlt} />
      <span>{name}</span>
    </a>
  )
}

function Social() {
  return(
    <div className="social">
      <Title title="REDES SOCIAIS"/>
      <div className="social-list">
        <SocialItem
        name="Laximit"
        link="https://github.com/laximit" 
        img={LogoGithub} 
        imgAlt="Github"/>
        <SocialItem
        name="murilo.lobos"
        link="https://www.instagram.com/murilo_lobos/" 
        img={LogoInsta}
        imgAlt="Instagram"/>
        <SocialItem
        name="Murilo Lobos"
        link="https://www.linkedin.com/in/murilo-lobos-0466941a4/" 
        img={LogoLinked}
        imgAlt="Linkedin"/>
        <SocialItem
        name="Laximit"
        link="https://www.reddit.com/user/Laximit" 
        img={LogoReddit}
        imgAlt="Reddit"/>
      </div>
    </div>
  )
}

export default Social;