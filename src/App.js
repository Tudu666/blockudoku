// App.js
import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
// import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" element={<Login/>} />
            <Route path="register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
