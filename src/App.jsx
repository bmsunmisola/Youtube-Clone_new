// Suppress Chrome extension background errors
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason?.message?.includes("Could not establish connection")) {
    event.preventDefault(); // Prevent app from breaking
    console.warn("Ignored extension error:", event.reason);
  }
});

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Videopage from './Components/Videopage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route index element={<Home />} />

        {/* Video Detail Page */}
        <Route path="/video/:videoid" element={<Videopage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
