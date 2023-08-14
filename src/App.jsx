import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DoguitosPage from './pages/DoguitosPage';
import DogDetailPage from './pages/DogIdPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} /> 
        <Route path="/signup" element={<RegisterPage />} /> 
        <Route path="/dog" element={<DoguitosPage />} /> 
        <Route path="/dog/:id" element={<DogDetailPage />} /> 
      </Routes>
    </Router>
  );
}
export default App;
