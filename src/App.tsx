import { useCallback, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ErrorBoundary } from '@/components/layout/ErrorBoundary';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { BackToTop } from '@/components/layout/BackToTop';
import { Home } from '@/pages/Home';

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <ErrorBoundary>
        <ThemeProvider>
          <LoadingScreen onComplete={handleLoadComplete} />
        </ThemeProvider>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />

          <ScrollProgress />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>

          <Footer />
          <BackToTop />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
