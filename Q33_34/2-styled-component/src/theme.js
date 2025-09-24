import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff",
  text: "#333333",
  buttonBg: "#4f46e5",
  buttonText: "#ffffff",
};

export const darkTheme = {
  body: "#1e293b",
  text: "#f8fafc",
  buttonBg: "#f97316",
  buttonText: "#000000",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;
