import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50vw;
  height: 40vh;
  border-radius: 10px;

  background-color: var(--white);
  -webkit-box-shadow: 3px 4px 18px -12px var(--desaturated-dark-blue);
  -moz-box-shadow: 3px 4px 18px -12px var(--desaturated-dark-blue);
  box-shadow: 3px 4px 18px -12px var(--desaturated-dark-blue);

  @media (max-width: 375px) {
    flex-direction: column;
    width: 80vw;
    height: 80vh;
  }
`;

export const ArticleImage = styled.img`
  width: 20vw;
  height: 40vh;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 375px) {
    width: 80vw;
    height: 30vh;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 40px;
  position: relative;

  > h3 {
    font-weight: bold;
    font-size: 18px;
    color: var(--very-dark-grayish-blue);
    margin-bottom: 10px;
  }

  > p {
    color: var(--desaturated-dark-blue);
  }

  @media (max-width: 375px) {
    padding: 20px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  /* position: relative; */
  margin-top: 20px;
`;

export const FooterInfo = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const NameAndDateContainer = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    color: var(--very-dark-grayish-blue);
  }

  > span {
    color: var(--grayish-blue);
  }
`;

export const ShareIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: var(--light-grayish-blue);

  cursor: pointer;

  &.active {
    background-color: var(--desaturated-dark-blue);
  }

  @media (max-width: 375px) {
    z-index: 3;
  }
`;
