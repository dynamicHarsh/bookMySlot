import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterDoctor from './pages/RegisterDoctor';
import RegisterPage from './pages/RegisterPage';


function App() {
  const {loading}= useSelector(state=> state.alerts)
  return (
    <>
      <BrowserRouter>
      {loading? (<Spinner/>):
      (
        <Routes>
          <Route path='/' 
          element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
          
          }/>
          <Route path='/addDoctor' 
          element={
          <ProtectedRoute>
            <RegisterDoctor/>
          </ProtectedRoute>
          
          }/>
          <Route path='/login' 
          element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
          
          }/>
          <Route path='/register' 
          element={
          <PublicRoute>
            <RegisterPage/>
          </PublicRoute>
          }/>
        </Routes>
      )}
        
      </BrowserRouter>
    </>
  );
}

export default App;
