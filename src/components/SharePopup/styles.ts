import styled, { css } from "styled-components";

export const DialogFormContainer = styled.div`
  display: none;
  
  &.active {
    position: absolute;
    bottom: 8rem;
    right: -2rem;

    display: block;
    transition: opacity 0.25s ease-out, background 0.25s ease-out;
    
    @media (max-width: 800px) {
      bottom: 0;
      right: 0;
      z-index: 2;

      min-width: 100%;
      border-radius: 8px;
    }
  }
`;

export const PopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.3rem 2rem;
  border-radius: 8px;

  background-color: var(--very-dark-grayish-blue);
  -webkit-box-shadow: 10px 10px 18px -12px var(--desaturated-dark-blue);
  -moz-box-shadow: 10px 10px 18px -12px var(--desaturated-dark-blue);
  box-shadow: 10px 10px 18px -12px var(--desaturated-dark-blue);

  z-index: 10;

  > strong {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.75rem;
    color: var(--grayish-blue);
    z-index: 11;

    @media (max-width: 800px) {
      font-size: 14px;
    }
  }

  @media (max-width: 800px) {
    justify-content: flex-start;

    padding-top: 25px;
    padding-bottom: 25px;

    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const buttonCSS = css`
  width: 15px;
  height: 15px;
  z-index: 11;
  margin-left: 8px;
  margin-right: 8px;

  cursor: pointer;
  border: none;
  outline: none;

  @media (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`;

export const FacebookButton = styled.button`
  ${buttonCSS};
  background: url('images/icon-facebook.svg') round;
`;

export const TwitterButton = styled.button`
  ${buttonCSS};
  background: url('images/icon-twitter.svg') round;
`;

export const PinterestButton = styled.button`
  ${buttonCSS};
  background: url('images/icon-pinterest.svg') round;
`;

export const Dialog = styled.div`
  border-left: 30px solid transparent; 
  border-right: 30px solid transparent; 
  border-top: 30px solid var(--very-dark-grayish-blue);

  position: absolute;
  top: 2.5rem;
  right: 4rem;
  z-index: 9;

  @media (max-width: 800px) {
    display: none;
  }
`;
