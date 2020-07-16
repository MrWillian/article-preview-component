import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
 
  border-radius: 8px;
  background-color: var(--white);
  -webkit-box-shadow: 3px 4px 18px -12px var(--desaturated-dark-blue);
  -moz-box-shadow: 3px 4px 18px -12px var(--desaturated-dark-blue);
  box-shadow: 3px 4px 18px -12px var(--desaturated-dark-blue);

  @media (max-width: 800px) {
    flex-direction: column;
    max-width: 80%;
  }
`;

export const ArticleImage = styled.img`
  max-width: 280px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  @media (max-width: 800px) {
    max-width: 100%;
    max-height: 220px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  
  max-width: 445px;
  padding: 40px;

  > h3 {
    font-weight: bold;
    font-size: 18px;
    color: var(--very-dark-grayish-blue);
    margin-bottom: 10px;
  }

  > p {
    color: var(--desaturated-dark-blue);
  }

  @media (max-width: 800px) {
    padding: 20px 30px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
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

  @media (max-width: 800px) {
    z-index: 3;
  }
`;
