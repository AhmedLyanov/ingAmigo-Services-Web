import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { lightThemeClass } from '@ingamigo/design';

import { AppRouter } from './app/router/router';
import './index.css';

document.body.className = lightThemeClass;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);