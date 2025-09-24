import React, { useState, useEffect } from "react";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { lightTheme, darkTheme } from "./theme";

const bounce = css`
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
`;

const Container = styled.div`
  margin-top: 80px;
  text-align: center;
`;

const Title = styled.h1`
  color: var(--text);
`;

const Button = styled.button`
  background: var(--buttonBg);
  color: var(--buttonText);
  padding: 10px 20px;
  margin: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

const AnimatedText = styled.h2`
  display: flex;
  justify-content: center;
  background-color: #06c371;
  margin-top: 30px;
  animation: ${bounce} 2s infinite;
  color: ${({ theme }) => theme.text};
`;

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const t = theme === "light" ? lightTheme : darkTheme;
    document.body.style.backgroundColor = t.body;
    document.body.style.setProperty("--text", t.text);
    document.body.style.setProperty("--buttonBg", t.buttonBg);
    document.body.style.setProperty("--buttonText", t.buttonText);
  }, [theme]);

  return (
    <Container>
      <Title>Selamat Datang di Materi Jayjay!</Title>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Ganti Tema
      </Button>
      <AnimatedText>Ayo Belajar Animasi!</AnimatedText>
    </Container>
  );
}

export default App;
