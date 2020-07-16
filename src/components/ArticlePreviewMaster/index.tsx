import React, { useState } from 'react';

import SharePopup from '../SharePopup';

import { 
  Container, ArticleImage, Info, Footer, FooterInfo, Avatar, NameAndDateContainer, ShareIcon 
} from './styles';

interface Props {
  author: string;
  avatarPath: string;
  title: string;
  content: string;
  imagePath: string;
  date: string;
  iconPath: string;
}

const ArticlePreviewMaster: React.FC<Props> = ({
  author, avatarPath, title, content, imagePath, date
}) => {
  const [isPopupActive, setIsPopupActive] = useState(false);

  function shareButtonHandler() {
    setIsPopupActive(!isPopupActive);
  }
  
  return (
    <>
      <Container>
        <ArticleImage src={imagePath} alt="article image" />

        <Info>
          <h3>{title}</h3>
          <p>{content}</p>

          <Footer>
            <FooterInfo>
              <Avatar src={avatarPath} alt="avatar image" />

              <NameAndDateContainer>
                <strong>{author}</strong>
                <span>{date}</span>
              </NameAndDateContainer>
            </FooterInfo>

            <ShareIcon 
              onClick={shareButtonHandler} 
              className={isPopupActive ? 'active' : ''}
              aria-label="share-button">
              
              <img 
                src={!isPopupActive ? 'images/icon-share.svg' : 'images/icon-share-active.svg'} 
                alt="share icon" />

            </ShareIcon>

          </Footer>

          <SharePopup isActive={isPopupActive} />
          
        </Info>
      </Container>
    </>
  );
}

export default ArticlePreviewMaster;
