import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const Container = styled.div`
  margin-top: 80px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
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

function App({ toggleTheme }) {
  return (
    <Container>
      <Title>Selamat Datang di Materi Jayjay!</Title>
      <Button onClick={toggleTheme}>Ganti Tema</Button>
      <AnimatedText>Ayo Belajar Animasi!</AnimatedText>
    </Container>
  );
}

export default App;
