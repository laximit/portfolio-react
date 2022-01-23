import React from "react";
import ProfilePic from '../assets/profile.jpg'
import '../styles/profile.scss'
import Title from "./Title";

function Profile() {
  return(
    <div className="profile">
      <img src={ProfilePic} alt="Foto de Perfil" />
      <div>
        <span className="title">Murilo Lobos</span>
        <span className="subtitle">Estudante (Desenvolvimento Web)</span>
      </div>
    </div>
  )
}

export default Profile;