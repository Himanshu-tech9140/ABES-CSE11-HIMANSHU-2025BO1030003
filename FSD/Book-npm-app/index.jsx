import React from 'react';
import { createRoot } from 'react-dom/client';

import './App.jsx';
import BookApp from './Book.jsx';
createRoot(document.getElementById('root')).render(
    <BookApp />
);