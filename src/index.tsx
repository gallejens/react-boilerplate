import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.tsx';
import './styles/main.scss';
import { MantineProvider } from '@mantine/core';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
