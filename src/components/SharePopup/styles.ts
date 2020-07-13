import styled from "styled-components";

export const DialogFormContainer = styled.div`
  display: none;
  position: absolute;

  right: 0;

  &.active {
    display: block;
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
  }

  @media (max-width: 375px) {
    width: 80vw;
    height: 35px;
    top: 0;
  }
`;

export const FacebookButton = styled.button`
  background: url('images/icon-facebook.svg') round;
  width: 15px;
  height: 15px;

  cursor: pointer;
  border: none;
  outline: none;
`;

export const TwitterButton = styled.button`
  background: url('images/icon-twitter.svg') round;
  width: 15px;
  height: 15px;

  cursor: pointer;
  border: none;
  outline: none;
`;

export const PinterestButton = styled.button`
  background: url('images/icon-pinterest.svg') round;
  width: 15px;
  height: 15px;

  cursor: pointer;
  border: none;
  outline: none;
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
