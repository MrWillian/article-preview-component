import React, { useState } from 'react';

import { 
  Container, ArticleImage, Info, Footer, FooterInfo, Avatar, NameAndDateContainer, ShareIcon 
} from './styles';

import { 
  DialogFormContainer, PopUpContainer, FacebookButton, TwitterButton, PinterestButton, Dialog
} from './PopupStyles';

interface Props {
  author: string;
  avatarPath: string;
  title: string;
  content: string;
  imagePath: string;
  date: string;
  iconPath: string;
}

interface PopupProps {
  isActive?: boolean;
}

const SharePopUp: React.FC<PopupProps> = ({ isActive }) => {
  return (
    <DialogFormContainer className={isActive ? 'active' : ''}>
      <PopUpContainer>
        <strong>Share</strong>
        <FacebookButton />
        <TwitterButton />
        <PinterestButton />
      </PopUpContainer>
      <Dialog />
    </DialogFormContainer>
  );
};

const ArticlePreviewMaster: React.FC<Props> = ({
  author, avatarPath, title, content, imagePath, date, iconPath
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
              <Avatar src={avatarPath} />

              <NameAndDateContainer>
                <strong>{author}</strong>
                <span>{date}</span>
              </NameAndDateContainer>
            </FooterInfo>

            <ShareIcon 
              onClick={shareButtonHandler} 
              className={isPopupActive ? 'active' : ''}>
              
              <img 
                src={!isPopupActive ? 'images/icon-share.svg' : 'images/icon-share-active.svg'} 
                alt="share icon" />

            </ShareIcon>

          </Footer>
          <SharePopUp isActive={isPopupActive} />
        </Info>
      </Container>
    </>
  );
}

export default ArticlePreviewMaster;
