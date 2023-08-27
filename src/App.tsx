import React, { useEffect, useState } from 'react';
import './App.css';
import './fonts/HelveticaNeue Bold.ttf';
import './fonts/Stolzl-Regular.ttf';
import { AnimatePresence } from 'framer-motion';
import Logo from './components/Logo';
import MainPage from './components/MainPage';
import DataContextProvider from './context/dataContext';

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setShow(false);
    }, 0);
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <DataContextProvider>
      <AnimatePresence>
        {
      // @ts-ignore
      show ? <Logo key={show} />
        : <MainPage />
}
      </AnimatePresence>
    </DataContextProvider>

  );
}

export default App;
