import { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ErrorBoundary } from '@/components/layout/ErrorBoundary';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { BackToTop } from '@/components/layout/BackToTop';
import { PageTransition } from '@/components/layout/PageTransition';
import { Home } from '@/pages/Home';

export default function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {loading ? (
              <LoadingScreen key="loader" onComplete={handleLoadComplete} />
            ) : (
              <div key="app" className="contents">
                <CustomCursor />
                <ScrollProgress />
                <Navbar />
                <main>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <PageTransition>
                          <Home />
                        </PageTransition>
                      }
                    />
                  </Routes>
                </main>
                <Footer />
                <BackToTop />
              </div>
            )}
          </AnimatePresence>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
