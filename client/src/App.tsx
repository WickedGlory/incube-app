import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import Mentorship from './pages/Mentorship';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/resources" 
          element={
            <ProtectedRoute>
              <Resources />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/mentorship" 
          element={
            <ProtectedRoute>
              <Mentorship />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
