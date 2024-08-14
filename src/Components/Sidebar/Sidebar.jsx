import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import { useAuth } from '../../Utils/AuthContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Default to open for larger screens
  const { user, logOutUser } = useAuth();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        setIsOpen(true); // Ensure it's open on large screens
      } else {
        setIsOpen(false); // Closed by default on small screens
      }
    };

    // Set the sidebar state initially based on screen size
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={`sidebar ${!isOpen && 'closed'}`}>
        <ul>
          {user ? (
            <>
              <li><Link to={"/BlogPage"} >Blog</Link></li>
              <li><Link to={"/author"}>Authors</Link></li>
              <li><Link to={"/Addblog"}>Add Blog</Link></li>
              <li><Link>Account</Link></li>
              <li><Link to={"/Contact"}>Contact</Link></li>
            </>
          ) : (
            <>
              <li><Link to={"/"} >Home</Link></li>
              <li><Link>About</Link></li>
              <li><Link to={"/Contact"}>Contact</Link></li>
              <li><Link to="/LogIn">Register</Link></li>
            </>
          )}
        </ul>
        <button id='btnz' onClick={logOutUser}>Sign out</button>
      </div>
      <div className="menu-btn" onClick={toggleSidebar}>
        ☰
      </div>
      
    </>
  );
};

export default Sidebar;
