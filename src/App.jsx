import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalContextProvider } from './context/global-context';
import { ThemeContext } from './context/theme-context';

import Home from './pages/Home';
import CoinDetails from './pages/CoinDetails';
import NotFound from './pages/NotFound';

import Navbar from './components/global/Navbar';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <GlobalContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalContextProvider>
    </>
  );
}

export default App;