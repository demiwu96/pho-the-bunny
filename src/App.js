import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavBar from 'views/Navbar';
import { Row, Col, Container } from 'reactstrap';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/index';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import mainRoutes from 'routes';

const RootContainer = styled.div``;

const Footer = styled.footer`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-style: italic;
`;

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
        <Footer xs={12}>Copyright © 2022, All Rights Reserved</Footer>
      </RootContainer>
    </ThemeProvider>
  );
}

export default App;
