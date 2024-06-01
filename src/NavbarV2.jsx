import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarV2 = () => {
  return (
    <div className="w-full fixed top-0 h-16 text-primary z-50 bg-white border-b-2">
      <div className="flex w-full h-full items-center justify-center">
        <div className="md:w-[80%] w-[95%] h-full flex align-middle items-center">
          <h1 className="text-4xl md:block hidden font-['Lalezar'] mt-2">
            Joel Harder
          </h1>
          <div className="grow">
            <div className="flex md:float-right items-center justify-center md:gap-8 gap-6 font-bold">
                <NavLink 
                  to="/"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid rgb(52, 58, 64)' : 'none',
                  })}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/projects"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid rgb(52, 58, 64)' : 'none',
                  })}
                >
                  Projects
                </NavLink>
                <NavLink 
                  to="/stories"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid rgb(52, 58, 64)' : 'none',
                  })}
                >
                  Stories
                </NavLink>
                <NavLink 
                  to="/reports"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid rgb(52, 58, 64)' : 'none',
                  })}
                >
                  Reports
                </NavLink>
                <NavLink 
                  to="/about"
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid rgb(52, 58, 64)' : 'none',
                  })}
                >
                  About
                </NavLink>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarV2;