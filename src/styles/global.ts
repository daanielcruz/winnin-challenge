import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --color-background: #f0f0f7;
  --color-primary: #707070;
  --color-primary-dark: #333333;
  --color-primary-darker: #262626;
  --color-secundary: #FF5500;
  --color-text: #FFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100vh;
}

body {
  background: var(--color-background);
}
`;

export default GlobalStyle;
