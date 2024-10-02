import { FC } from "react";
import HeroImg from "../../assets/hero-img.png"
import './style.css'
import OverlayMenu from "./OverlayMenu";

const Hero : FC = () => {
    return (
        <div className="hero">
            <OverlayMenu />
            <img src={HeroImg} alt="hero" />
        </div>
    )
}

export default Hero;