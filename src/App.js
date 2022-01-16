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

const RootContainer = styled.div``;

function App() {
  return (
    <RootContainer>
      <ThemeProvider theme={theme}>
        <Router>
          <TopNavBar />
          <Routes>
            {mainRoutes.map(({ path, Element }) => (
              <Route path={path} element={<Element />} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RootContainer>
  );
}

export default App;
