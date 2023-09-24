import React from 'react';
import { useSelector } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';
import AppointmentPage from './pages/AppointmentPage';
import Booking from './pages/Booking';
import DoctorPage from './pages/DoctorPage';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterDoctor from './pages/RegisterDoctor';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import ProfilePage from './pages/ProfilePage';
import TeamPage from './pages/TeamPage';


function App() {
  const {loading}= useSelector(state=> state.alerts)
  return (
    <>
      <BrowserRouter>
      {loading? (<Spinner/>):
      (
        <Routes>
          <Route path='/home' 
          element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
          
          }/>
           <Route path='/booking' 
          element={
          <ProtectedRoute>
            <Booking/>
          </ProtectedRoute>
          
          }/>
          <Route path='/' element={
            <HomePage/>
          }/>
          <Route path='/about' element={
            <TeamPage/>
          }/>
          <Route path='/myAppointment' 
          element={
          <ProtectedRoute>
            <AppointmentPage/>
          </ProtectedRoute>
          
          }/>
          <Route path='/appointments' 
          element={
          <ProtectedRoute>
            <AppointmentPage/>
          </ProtectedRoute>
          
          }/>
          <Route path='/getDoctors' 
          element={
          <ProtectedRoute>
            <DoctorPage/>
          </ProtectedRoute>
          
          }/>
          <Route path='/getUsers' 
          element={
          <ProtectedRoute>
            <UserPage/>
          </ProtectedRoute>
          
          }/>
          <Route path='/addDoctor' 
          element={
          <ProtectedRoute>
            <RegisterDoctor/>
          </ProtectedRoute>
          
          }/>
          <Route path='/profile' 
          element={
          <ProtectedRoute>
            <ProfilePage/>
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
