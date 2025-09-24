import styled, { css } from "styled-components";

// Reusable Colors
export const colors = {
  red: "#ff0000",
  blue: "#0000ff",
  border: "#ddd",
};

const textStyle = css`
  font-family: "Arial", sans-serif;
  margin: 8px 0;
`;

export const Title = styled.h1`
  ${textStyle}
  color: ${colors.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Subtitle = styled.p`
  ${textStyle}
  color: ${colors.blue};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
`;

const Button = styled.button`
  ${textStyle}
  padding: 6px 14px;
  border-radius: 6px;
  border: 2px solid transparent;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
`;

export const BlueButton = styled(Button)`
  color: ${colors.blue};
  border-color: ${colors.blue};
  &:hover {
    background: ${colors.blue};
    color: white;
  }
`;

export const RedButton = styled(Button)`
  color: ${colors.red};
  border-color: ${colors.red};
  &:hover {
    background: ${colors.red};
    color: white;
  }
`;
