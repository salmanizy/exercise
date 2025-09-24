import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const colors = {
  blue: '#2B6CB0',
  red: '#E53E3E'
};

export const Title = styled.h1`
  margin: 28px 0 4px 0;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.red};
  text-align: center;
`;

export const Subtitle = styled.h2`
  margin: 0 0 22px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.blue};
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: inline-flex;
  gap: 12px;
  margin-top: 6px;
`;

const baseButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease;
`;

export const BlueButton = styled.button`
  ${baseButton};
  color: ${colors.blue};
  border-color: ${colors.blue};
  background: #E6F2FF;
`;

export const RedButton = styled.button`
  ${baseButton};
  color: ${colors.red};
  border-color: ${colors.red};
  background: #FFECEC;
`;
