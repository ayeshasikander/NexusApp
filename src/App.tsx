import React, { useState, useEffect } from 'react';
import SplashScreen from './pages/auth/Splash';
import LoginScreen from './pages/auth/Login';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {isLoading ? (
        <SplashScreen finishLoading={!isLoading} />
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default App;