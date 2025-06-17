import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projeto1 from "../../Assets/Projects/projeto_1.png";
import projeto2 from "../../Assets/Projects/projeto_2.png";
import projeto3 from "../../Assets/Projects/projeto_3.png";
import projeto4 from "../../Assets/Projects/projeto_4.png";
import TREINALIDER from "../../Assets/Projects/TREINALIDER.png";
import CRUDJAVA from "../../Assets/Projects/CRUDJAVA.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projeto3}
              isBlog={false}
              title="Quantum"
              description="Sistema web para autoavaliação de lideranças e equipes, permitindo ao RH gerar relatórios e acompanhar a evolução dos times por meio de dashboards interativos."
              ghLink="https://github.com/CODEPLAY-Fatec/API-ADS-3-Sem-Fatec"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUDJAVA}
              isBlog={false}
              title="CRUD"
              description="Este é um projeto em Java que implementa um sistema de CRUD (Create, Read, Update, Delete) para o cadastro e gerenciamento de alunos. O sistema permite o acompanhamento do histórico de peso dos alunos e exportação dessas informações para um arquivo de texto (.txt)."
              ghLink="https://github.com/Gabriecarvalho/CRUD"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TREINALIDER}
              isBlog={false}
              title="Programa de Capacitação para Lideranças"
              description="Implementar um programa de capacitação para líderes da empresa XYZ, a fim de melhorar suas habilidades de gestão de pessoas, comunicação e tomada de decisão. O programa incluirá treinamentos presenciais e online, bem como coaching individual."
              ghLink="https://github.com/Gabriecarvalho/TREINARLIDER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projeto1}
              isBlog={false}
              title="Agile Learn"
              description="Plataforma web que permita aos usuários acessar, visualizar e compreender de maneira eficaz todos os processos e artefatos da metodologia ágil Scrum. A interface será projetada para oferecer uma experiência de navegação intuitiva e de fácil acesso."
              ghLink="https://github.com/Butterfly-Fatec/api-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projeto4}
              isBlog={false}
              title="FAPG"
              description="Oprincipal objetivo deste projeto é o desenvolvimento de um sistema web intuitivo que permita a gestão de projetos e suas atividades a fim de garantir eficiência e transparência no seu acompanhamento pelos partícipes."
              ghLink="https://github.com/CODEPLAY-Fatec/API-ADS-4-Sem-Fatec"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projeto2}
              isBlog={false}
              title="Chatbot SQL"
              description="O projeto visa criar uma aplicação que permite acessar informações de um banco de dados MySQL usando exclusivamente a linguagem natural. A aplicação deve ser capaz de interpretar a linguagem natural e traduzi-la para uma consulta SQL, executando-a e retornando o resultado ao usuário."
              ghLink="https://github.com/Butterfly-Fatec/api-2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
