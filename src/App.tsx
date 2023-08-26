import React, { useEffect, useState } from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import Logo from './components/Logo';
import MainPage from './components/MainPage';

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setShow(false);
    }, 100);
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <AnimatePresence>
      {
      // @ts-ignore
      show ? <Logo key={show} />
        : <MainPage />
}
    </AnimatePresence>

  );
}

export default App;
