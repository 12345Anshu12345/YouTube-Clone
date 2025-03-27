import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser, faBell, faMicrophone, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './header.css'

interface HeaderProps {
  toggleSidebar: () => void;
}

function Header({ toggleSidebar }: HeaderProps) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="head">
      <ul style={{ display: "flex", alignItems: "center", padding: "0 16px" }}>
        <FontAwesomeIcon 
          icon={faBars} 
          style={{marginRight: "20px", cursor: "pointer" }} 
          onClick={toggleSidebar}
          className="threedot sidebar-icon" 
        />
        
        <img 
          className="logo sidebar-icon" 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" 
          alt="YouTube icon" 
          style={{ cursor: "pointer",height:"35px",width:"100px" }}
          onClick={() => navigate("/")}
        />
        
        <form onSubmit={handleSearch} style={{ flex: 1, display: "flex", margin: "0 20px", maxWidth: "600px" }}>
          <input 
            className="search sidebar-icon" 
            type="text" 
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: "8px 20px",
              border: "1px solid #ccc",
              borderRight: "none",
              borderRadius: "20px 20px",
              fontSize: "16px",
            }}
          />
          <button 
            type="submit"
            style={{
              padding: "0 16px",
              border: "1px solid #ccc",
              borderLeft: "none",
              borderRadius: "0 20px 20px 0",
              backgroundColor: "#f8f8f8",
              cursor: "pointer"
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <FontAwesomeIcon 
            icon={faMicrophone} 
            style={{ cursor: "pointer" }} 
            className="voice" 
          />
          
          <button className="sidebar-icon"
            style={{
              top:"30px",
              position:"absolute",
              padding: "8px 5px",
              cursor: "pointer",
              display: "flex",
              left:"1000px",
              gap: "50px"
            }}
          >
            <span style={{ fontSize: "14px" }}>+Create</span>
          </button>
          
          <FontAwesomeIcon 
            icon={faBell} 
            style={{ cursor: "pointer" }} 
            className="notifi_icon" 
          />
          
          <FontAwesomeIcon 
            icon={faCircleUser} 
            style={{ cursor: "pointer", fontSize: "32px" }} 
            className="accountimage" 
          />
        </div>
      </ul>
    </div>
  );
}

export default Header;