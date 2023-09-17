// Importing our components from MUI.
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    // The sx prop is a shortcut for defining custom styles.
    // The outer curly braces opens up our javascript, while the inner curly braces represents our object creation.
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: 'lavender', color: '#515A5A'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          <Button color="inherit">Listings</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}