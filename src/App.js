import React from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className="App">
      <ParticlesBackground theme={theme} />
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
