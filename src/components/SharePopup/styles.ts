import styled, { css } from "styled-components";

export const DialogFormContainer = styled.div`
  display: none;
  position: absolute;

  right: 0;
  margin-top: 25px;
  margin-right: 15px;

  &.active {
    display: block;
    transition: opacity 800ms 400ms;
  }

  @media (max-width: 375px) {
    margin-top: 70px;
    margin-right: 0;
  }
`;

export const PopUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;

  width: 160px;
  height: 35px;
  border-radius: 5px;

  background-color: var(--very-dark-grayish-blue);
  -webkit-box-shadow: 10px 10px 18px -12px var(--desaturated-dark-blue);
  -moz-box-shadow: 10px 10px 18px -12px var(--desaturated-dark-blue);
  box-shadow: 10px 10px 18px -12px var(--desaturated-dark-blue);

  position: absolute;
  right: 0;
  z-index: 10;

  > strong {
    text-transform: uppercase;
    font-size: 10px;
    color: var(--grayish-blue);

    @media (max-width: 375px) {
      font-size: 14px;
    }
  }

  @media (max-width: 375px) {
    width: 80vw;
    height: 80px;
    z-index: 2;

    padding-right: 50px;
    /* margin-top: 70px; */

    border-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const iconCSS = css`
  width: 15px;
  height: 15px;

  cursor: pointer;
  border: none;
  outline: none;

  @media (max-width: 375px) {
    width: 20px;
    height: 20px;
  }
`;

export const FacebookButton = styled.button`
  ${iconCSS};
  background: url('images/icon-facebook.svg') round;
`;

export const TwitterButton = styled.button`
  ${iconCSS};
  background: url('images/icon-twitter.svg') round;
`;

export const PinterestButton = styled.button`
  ${iconCSS};
  background: url('images/icon-pinterest.svg') round;
`;

export const Dialog = styled.div`
  border-left: 40px solid transparent; 
  border-right: 40px solid transparent; 
  border-top: 42px solid var(--very-dark-grayish-blue);

  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 375px) {
    display: none;
  }
`;
