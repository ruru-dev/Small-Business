import { Link } from "react-router-dom";

// Importing our components from MUI.
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navbar({ user, logoutUser }) {
  return (
    // The sx prop is a shortcut for defining custom styles.
    // The outer curly braces opens up our javascript, while the inner curly braces represents our object creation.
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "lavender", color: "#515A5A" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          <Link to="/">
            <Button>Listings</Button>
          </Link>
          {user && (
            <Link to="/listings/new">
              <Button>New</Button>
            </Link>
          )}
          {user ? (
            <Button onClick={() => logoutUser()}>Logout</Button>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
      {user && (
        <Box
          sx={{
            height: "25px",
            backgroundColor: "lightgray",
            padding: "0 25px",
          }}
        >
          Logged in as: {user.username}{" "}
        </Box>
      )}
    </Box>
  );
}
