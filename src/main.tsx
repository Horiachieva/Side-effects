// import { createRoot } from 'react-dom/client';

// const techName = 'React';
// const imgUrl =
//   'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=640';

// createRoot(document.getElementById('root') as HTMLElement).render(
//   <>
//     <h1>Welcome to {techName}</h1>
//     <p>
//       This is JSX — it looks like HTML, but it's not quite the same. It has its
//       own rules!
//     </p>
//     <img src={imgUrl} alt="Man, field and a mountain" width="640" />
//   </>
// );
// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// Нормалізація стилів
import 'modern-normalize';
// Глобальні стилі (додатково)
import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
