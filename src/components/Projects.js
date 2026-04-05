import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Calculadora Avançada",
      description: "Lógica de programação e interface responsiva",
      imgUrl: projImg1,
    },
    {
      title: "Sistema de Gestão",
      description: "Controle de estoque e fluxo de trabalho",
      imgUrl: projImg2,
    },
    {
      title: "API Rest",
      description: "Backend robusto com documentação e segurança",
      imgUrl: projImg3,
    },
    {
      title: "E-commerce Full Stack",
      description: "Catálogo de produtos e integração de pagamentos",
      imgUrl: projImg4,
    },
    {
      title: "Dashboard Financeiro",
      description: "Gestão de gastos com visualização de dados",
      imgUrl: projImg5,
    },
    {
      title: "Sistema de Agendamentos",
      description: "Reserva de horários e gestão de clientes",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos futuros</h2>
                <p>Confira os projetos que estou desenvolvendo e planejando para o futuro. Cada um deles foi pensado para consolidar meus estudos em Java, Spring Boot e Angular.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Ainda não há mais nem um projeto a ser desenvolvido.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Ainda não há mais nem um projeto a ser desenvolvido.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
