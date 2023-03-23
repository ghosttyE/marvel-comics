import React from "react";
import GithubIcon from "../../Assets/Icons/GithubIcon.svg"
import InstagramIcon from "../../Assets/Icons/InstagramIcon.svg"
import LinkedinIcon from "../../Assets/Icons/LinkedinIcon.svg"
import "./style.css"

export function Footer() {
    return (
        <div className="Footer-Container">
            <a href="https://developer.marvel.com/" target="_blank" rel="noreferrer" className="Footer-Container-Copyright">Data provided by Marvel. © 2014 Marvel</a>
            <div className="Footer-Container-Objective">
                <label>Objetivo</label>
                <span>Esse projeto foi feito exclusivamente para o teste de competencia na vaga de Front-End da BRISANET. Feito por AMLA</span>
            </div>
            <div className="Footer-Container-Socials">
                <label>Sociais</label>
                <span><img src={GithubIcon} alt="Github Icon"/>Github</span>
                <span><img src={InstagramIcon} alt="Github Icon"/>Instagram</span>
                <span><img src={LinkedinIcon} alt="Github Icon"/>Linkedin</span>
            </div>

        </div>
    );
}