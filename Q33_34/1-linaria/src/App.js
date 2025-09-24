import React from 'react';
import { Title, Subtitle, ButtonGroup, BlueButton, RedButton } from './App.style';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Title>Selamat datang di pelajaran CSS-in-JS</Title>
      <Subtitle>JayJay</Subtitle>
      <ButtonGroup>
        <BlueButton>Lanjut Belajar!</BlueButton>
        <RedButton>Kembali</RedButton>
      </ButtonGroup>
    </div>
  );
}

export default App;
