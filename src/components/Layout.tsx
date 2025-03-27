import  { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import Sidebar from "./Sidebar/Sidebar";
import { useTheme } from "../context/Theme_context";
import './Sidebar/sidebar.css'

function Layout() {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={theme}>
      <Header toggleSidebar={toggleSidebar} />
      
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div className={`sidebar ${!sidebarOpen && isMobile ? 'sidebar-mobile-hidden' : ''}`}>
          <Sidebar />
        </div>

        {/* Main Content - adjust padding based on sidebar state */}
        <div style={{ 
          flex: 1, 
          marginLeft: isMobile ? 0 : sidebarOpen ? '240px' : '72px',
          paddingTop: "60px",
          transition: 'margin-left 0.3s ease'
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;