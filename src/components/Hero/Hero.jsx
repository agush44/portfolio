import React from "react";
import { AuroraHero } from "./AuroraHero";
import ProfilePhoto from "../../assets/agushcv.png";
import { Img, ProfileWrapper } from "./Hero.styles";
import ProfileCard from "../ProfileCard/ProfileCard";
import RetroBtn from "../../UI/Button/RetroBtn";

const Hero = () => {
  return (
    <div>
      {/* AuroraHero como fondo */}
      <AuroraHero />

      {/* Contenido principal */}
      <div className="relative z-10 text-center p-10">
        <ProfileWrapper>
          <Img src={ProfilePhoto} alt="Foto de perfil" />
          <h2 className="text-5xl font-bold">Bienvenid@,</h2>
          <h2 className="text-5xl font-bold">soy Ma. Agustina Benitez</h2>
          <p className="mt-8 mb-8 text-gray-600 max-w-xl">
            Desarrolladora Full Stack
          </p>
          <RetroBtn>Descargar CV</RetroBtn>
        </ProfileWrapper>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Hero;
