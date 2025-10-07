import { createRoot } from 'react-dom/client';
import './4_features/themeToggle/model';
import App from './1_app/App';
import './index.css';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
