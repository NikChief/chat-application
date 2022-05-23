import React from 'react';

import { Routes, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import Chat from './components/Chat';

function App() {
  return (
      <Routes>
        <Route path='/' exact element={<SignIn />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
  );
}

export default App;
