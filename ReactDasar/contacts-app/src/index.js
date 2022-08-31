import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './ContactApp';

import './style.css';

let element = <ContactApp />;

const root = createRoot(document.querySelector('#root'));

root.render(element);
