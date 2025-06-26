import React from 'react';
import { createRoot } from 'react-dom/client';
import APP from './APP.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<APP />);
