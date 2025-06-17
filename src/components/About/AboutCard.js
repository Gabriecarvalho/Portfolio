import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, eu sou <span className="purple">Gabriel Carvalho </span>  
            de <span className="purple">São josé dos Campos,Brasil.</span>
            <br />
            Atualmente busco minha primeira oportunidade de estagio ou emprego na area da programação.
            <br />
            Concluindo o curso de Análise e Desenvolvimento de Sistemas na <span className="purple">FATEC SJC</span>.
            <br />
            <br />
            Além de programar, algumas outras atividades que eu adoro fazer são:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar videogames
            </li>
            <li className="about-activity">
              <ImPointRight /> Resolver desafios de programação como LeetCode
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Do, or do not. There is no “try”
          </p>
          <footer className="blockquote-footer">Yoda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
