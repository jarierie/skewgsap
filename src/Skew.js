import React from "react";
import styled from "styled-components";
import meenoi from "./assets/meenoi5.jpg";
import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";

const Container = styled.div`
  width: 500px;
  height: 600px;
  background-image: url(${meenoi});
  background-position: center;
  background-size: cover;
  margin: auto;
  margin-top: 20px;
`;

const Skew = () => {
  const [skew, setSkew] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef(null);

  useEffect(() => {
    const getPosition = (e) => {
      setSkew({
        x: (e.pageX - window.innerWidth / 2) * 0.01,
        y: (e.pageY - window.innerWidth / 2) * 0.01,
      });
    };

    document.addEventListener("mousemove", getPosition);
    return () => {
      document.removeEventListener("mousemove", getPosition);
    };
  }, []);

  const skewAnim = () => {
    gsap.to(ref.current, {
      skewY: skew.x,
      skewX: skew.y,
      transition: 0.1,
    });
  };

  const skewOut = () => {
    gsap.to(ref.current, { skewY: 0, skewX: 0 });
  };

  return (
    <>
      {" "}
      <Container onMouseLeave={skewOut} onMouseOver={skewAnim} ref={ref}>
        <h1>{skew.x}</h1>
        <h1>{skew.y}</h1>
      </Container>
    </>
  );
};

export default Skew;
