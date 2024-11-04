import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] transition-colors duration-300">
        <Nav />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
