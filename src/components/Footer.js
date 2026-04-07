import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          {/* Mantemos a coluna (sm={6}), mas escondemos a imagem dentro dela */}
          <Col size={12} sm={6}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ visibility: 'hidden' }} 
            />
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/robertgean/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              {/* Adicione os outros ícones aqui se desejar, como no NavBar */}
            </div>
            <p>Copyright 2026. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};