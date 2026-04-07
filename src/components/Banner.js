import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpeg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 30);
  const [index, setIndex] = useState(1);
  const toRotate = ["Desenvolvedor | Estudante de Java e Spring"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    }; // ESSA LINHA É CRUCIAL
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Bem-vindo ao meu portfólio!</span>
                  <h1>
                    {`Olá! Eu sou Robert Gean`}{" "}
                    <span
                      className="txt-rotate"
                      dataperiod="2000"
                      data-rotate='[ "Desenvolvedor | Estudante de Java e Spring" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Desenvolvedor em constante evolução, focado no Back-end com
                    Java e Spring Boot. Atualmente no 3º semestre de ADS, sigo
                    em progresso para me tornar Full-Stack, futuramente
                    expandindo meu domínio para Angular e React. Foco em código
                    limpo, sistemas eficientes e aprendizado contínuo.
                  </p>
                  <button onClick={() => (window.location.hash = "#connect")}>
                    Vamos conversar <ArrowRightCircle size={25} />
                  </button>{" "}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
            className="d-flex justify-content-center align-items-center"
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={headerImg}
                    alt="Foto de Perfil do Robert"
                    className="rounded-circle"
                    style={{
                      width: "100%",
                      maxWidth: "400px", // Limita o tamanho para não empurrar o texto
                      aspectRatio: "1/1", // Garante que fique redondo mesmo se a foto for retangular
                      objectFit: "cover", // Não deixa a foto esticar
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
