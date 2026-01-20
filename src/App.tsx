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
import FAQ from './components/FAQ/FAQ';
import RoofMaintenance from './components/RoofMaintenance/RoofMaintenance';
import RoofRepairs from './components/RoofRepairs/RoofRepairs';
import Emergency from './components/Emergency/Emergency';
import Surveys from './components/Surveys/Surveys';

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
            <Route path="/emergency-roofing" element={
              <>
                <Emergency />
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/faqs" element={
              <>
                <FAQ />
                <Footer />
              </>
            } />
            <Route path="/surveys-consultancy" element={
              <>
                <Surveys />
                <Footer />
              </>
            } />
            <Route path="/roof-maintenance" element={
              <>
                <RoofMaintenance />
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
