import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import HomeContact from './components/Contact/HomeContact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Residential from './components/Residential/Residential';
import Commercial from './components/Commercial/Commercial';
import RoofRepairs from './components/RoofRepairs/RoofRepairs';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #050505;
`;

const MainContent = styled.main`
  margin-top: 80px; /* Space for fixed header */
`;

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <ScrollToTop>
            <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Testimonials />
                <HomeContact />
                <Footer />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/residential" element={
              <>
                <Residential />
                <Footer />
              </>
            } />
            <Route path="/commercial" element={
              <>
                <Commercial />
                <Footer />
              </>
            } />
            <Route path="/roof-repairs" element={
              <>
                <RoofRepairs />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Contact />
                <Footer />
              </>
            } />
            {/* Add more routes as we create more pages */}
            </Routes>
          </ScrollToTop>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
