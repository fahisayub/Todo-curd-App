import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
