import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #1d3557;
    --secondary-color: #e63946;
    --accent-color: #457b9d;
    --background-light: #f1faee;
    --text-dark: #2b2d42;
    --text-light: #8d99ae;
    --white: #ffffff;
    --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-dark);
    background-color: var(--white);
    line-height: 1.6;
  }
  
  main {
    min-height: calc(100vh - 200px);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', 'Segoe UI', 'Roboto', sans-serif;
    margin-top: 0;
    color: var(--primary-color);
    font-weight: 700;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  button, .button {
    background-color: var(--secondary-color);
    color: var(--white);
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    
    &:hover {
      background-color: #c1121f;
      transform: translateY(-2px);
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.3);
    }
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .section {
    padding: 4rem 0;
  }
  
  .text-center {
    text-align: center;
  }
  
  .card {
    background: var(--white);
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
    
    h3 {
      font-size: 1.25rem;
    }
    
    .section {
      padding: 2.5rem 0;
    }
  }
`;

export default GlobalStyles;