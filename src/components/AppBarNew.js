import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import { useAuth } from './auth'



function AppBarNew() {
  const navlinkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "black" : "#1a1a1a",
      backgroundColor: isActive ? "#cce0ff" : "#0099cc",
      padding: "10px",
      borderRadius: "8px",
      marginLeft: "12px",
    };
    
  };
  const auth = useAuth()
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <BrightnessLowIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              REACT ROUTER DEMO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <nav className="navbar">
                <div className="links">
                  <NavLink to="/" style={navlinkstyle}>
                    HOME
                  </NavLink>
                  <NavLink to="/about" style={navlinkstyle}>
                    About
                  </NavLink>

                  <NavLink to="/Products" style={navlinkstyle}>
                    Products
                  </NavLink>

                  <NavLink to="/Profile" style={navlinkstyle}>
                    Profile
                  </NavLink>

                  {!auth.user && (
                    <NavLink to="/Login" style={navlinkstyle}>
                    Login
                  </NavLink>
                  )}
                </div>
              </nav>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default AppBarNew;
