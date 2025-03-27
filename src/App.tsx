import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import List from "./components/Sidebar/Sidebar";
import Videos from "./components/Video/video";
import { useTheme } from "./context/Theme_context";
import "./App.css";
import Login from "./components/Login/Login";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated on initial load
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <div className={theme}>
      {/* Only show theme toggle button when authenticated */}
      {isAuthenticated && (
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      )}
      
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route index element={<Videos />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;