import React, { useState, useEffect } from 'react';
import { ConfigProvider, Button, Card, Switch, theme } from 'antd';
import SplashScreen from './pages/auth/Splash';
import { COLORS } from './theme/colors'; 

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ye variable current theme ke colors hold karega
  const activeColors = isDarkMode ? COLORS.dark : COLORS.light;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <>
      {isLoading ? (
        <SplashScreen finishLoading={!isLoading} />
      ) : (
        <ConfigProvider
          theme={{
            // 1. Antd ka internal Dark/Light algorithm switch karein
            algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,

            // 2. Token mein hum apne COLORS variable use karenge
            token: {
              // Primary Color (Aapka #07194a)
              colorPrimary: activeColors.btnPrimary,

              // Page Background (Optional, but good for Modals/Drawers)
              colorBgBase: activeColors.bgPage,

              // Card/Container Background
              colorBgContainer: activeColors.bgCard,

              // Text Colors
              colorTextHeading: activeColors.textHeading,
              colorText: activeColors.textPara,

              // Border Color
              colorBorder: activeColors.borderMain,
            }
          }}
        >
          {/* MAIN APP CONTENT */}
          <div className="min-h-screen flex flex-col items-center justify-center bg-page transition-colors duration-500">

            <Card className="w-96 bg-card border-border-main shadow-xl animate-reveal">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display font-heavy text-heading">Dashboard</h2>
                <Switch
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                />
              </div>

              <p className="text-paragraph font-body mb-6">
                Welcome back! Ant Design now uses <code className="font-bold">{activeColors.btnPrimary}</code> dynamically.
              </p>

              <div className="space-y-3">
                {/* Tailwind Button (Uses CSS Variables) */}
                <button className="w-full py-3 rounded-lg bg-btn-primary text-btn-primary-text font-bold shadow-lg hover:scale-[1.02] transition-transform">
                  Get Started (Tailwind)
                </button>

                {/* Ant Design Button (Uses JS COLORS object) */}
                <Button block size="large" type="primary">
                  Documentation (Antd)
                </Button>
              </div>
            </Card>

          </div>
        </ConfigProvider>
      )}
    </>
  );
};

export default App;