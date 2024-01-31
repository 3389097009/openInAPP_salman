import { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import LoginPage from './Components/LoginPage/LoginPage';
import Signup from './Components/Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      {/* Default route: Redirect to login page */}
      <Route path="*" element={<LoginPage />} />

    </Routes>

  );
}

export default App;
