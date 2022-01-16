import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from 'views/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/index';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import mainRoutes from 'routes';
import Footer from 'components/Footer.jsx';

const RootContainer = styled.div``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <Router>
          <TopNavBar />
          <Routes>
            {mainRoutes.map(({ path, Element }) => (
              <Route path={path} element={<Element />} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
        <Footer />
      </RootContainer>
    </ThemeProvider>
  );
}

export default App;
