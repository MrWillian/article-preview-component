import React from 'react';

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
  author,
  avatarPath,
  title,
  content,
  imagePath,
  date,
  iconPath,
}) => {
  return (
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

          <ShareIcon>
            <img src={iconPath} alt="share icon" />
          </ShareIcon>

        </Footer>

      </Info>
      
    </Container>
  );
}

export default ArticlePreviewMaster;
