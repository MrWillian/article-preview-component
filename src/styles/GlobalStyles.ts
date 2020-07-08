import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Manrope', sans-serif;
    font-size: 13px;
  }

  html, body, #root {
    height: 100%;
    background-color: var(--light-grayish-blue);
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  :root {
    --very-dark-grayish-blue: hsl(217, 19%, 35%);
    --desaturated-dark-blue: hsl(214, 17%, 51%);
    --grayish-blue: hsl(212, 23%, 69%);
    --light-grayish-blue: hsl(210, 46%, 95%);

    --white: #FFF;
  }
`;
