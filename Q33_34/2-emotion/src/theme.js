import { css } from "@emotion/react";

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

export const globalStyles = (theme) => css`
  body {
    background-color: ${theme.body};
    color: ${theme.text};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;
