import React from 'react';

import ArticlePreviewMaster from './components/ArticlePreviewMaster';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  const article = {
    author: 'Michelle Appleton',
    avatarPath: 'images/avatar-michelle.jpg',
    title: 'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
    content: "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
    imagePath: 'images/drawers.jpg',
    date: '28 Jun 2020',
    iconPath: 'images/icon-share.svg',
  }

  return (
    <>
      <ArticlePreviewMaster 
        author={article.author}
        avatarPath={article.avatarPath}
        title={article.title}
        content={article.content}
        imagePath={article.imagePath}
        date={article.date}
        iconPath={article.iconPath} />

      <GlobalStyles />
    </>
  );
}

export default App;
