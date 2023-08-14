import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DoguitosPage from './pages/Dog/DoguitosPage';
import DogDetailPage from './pages/Dog/DogIdPage';
import MyAnimalsPage from './pages/Me/MyDogs';
import NewDoguitosPage from './pages/Me/NewDogPage';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} /> 
        <Route path="/signup" element={<RegisterPage />} /> 

        {/* Dados para qualquer usuario logado acessar */}
        <Route path="/dog" element={<DoguitosPage />} /> 
        <Route path="/dog/:id" element={<DogDetailPage />} /> 

        {/* Dados para apenas o usuario dono conseguir acessar */}
        <Route path="/me/" element={<MyAnimalsPage />} /> 
        <Route path="/me/newdog" element={<NewDoguitosPage />} /> 
       
       
      </Routes>
    </Router>
  );
}
export default App;
