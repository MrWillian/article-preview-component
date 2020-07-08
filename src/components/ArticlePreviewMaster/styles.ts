import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 650px;
  height: 250px;
  border-radius: 10px;

  background-color: var(--white);
  -webkit-box-shadow: 3px 4px 18px -12px rgba(108,118,131,1);
  -moz-box-shadow: 3px 4px 18px -12px rgba(108,118,131,1);
  box-shadow: 3px 4px 18px -12px rgba(108,118,131,1);
`;

export const ArticleImage = styled.img`
  width: 250px;
  height: 250px;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

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

export const ShareIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--light-grayish-blue);

  > img {
    cursor: pointer;
  }
`;
