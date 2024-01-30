import { useState } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import LoginPage from './Components/LoginPage/LoginPage';
import Signup from './Components/Signup/Signup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <LoginPage /> */}
      {/* <Signup /> */}
    </>
  );
}

export default App;
