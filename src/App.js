import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/globalStyles';
import { theme } from 'theme/mainTheme';
import Header from 'components/molecules/Header/Header';
import Form from 'components/organisms/Form/Form';

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  max-width: 900px;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <Header />
          <Form />
          {/* <Tablature /> */}
        </MainWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
