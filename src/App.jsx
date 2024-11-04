import React from 'react';
import { ThemeProvider } from './context/theme-provider';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black">
        <Nav />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
