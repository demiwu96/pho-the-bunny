import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from './components/Navbar';
import Home from './Page/Home';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/index';

const RootContainer = styled.div``;

function App() {
  return (
    <RootContainer>
      <head>
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <script src="bower_components/aos/dist/aos.js"></script>
      </head>
      <ThemeProvider theme={theme}>
        <TopNavBar />
        <Home />
        {/* Router if we plan to have different page */}
      </ThemeProvider>
    </RootContainer>
  );
}

export default App;
