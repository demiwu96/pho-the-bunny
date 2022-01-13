import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/index';

const RootContainer = styled.div``;

function App() {
  return (
    <RootContainer>
      <ThemeProvider theme={theme}>
        <TopNavBar />
        {/* Router if we plan to have different page */}
      </ThemeProvider>
    </RootContainer>
  );
}

export default App;
