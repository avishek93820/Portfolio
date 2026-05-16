import { createRoot } from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import App from './App';
import './index.css';

const rootEl = document.getElementById('root');

if (!rootEl) {
  document.body.innerHTML =
    '<p style="font-family:sans-serif;padding:2rem;color:#f87171">Root element #root not found. Run with npm run dev.</p>';
} else {
  createRoot(rootEl).render(<App />);
}
