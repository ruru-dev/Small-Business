import { TextField, Button } from "@mui/material";

export default function LoginForm({ setIsLoggedIn }) {
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoggedIn(true);
  }

  return (
    <form onSubmit={handleSubmit} className="standard-form">
      <TextField required label="Username" variant="standard" />
      <TextField required label="Password" variant="standard" type="password" margin="normal" />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="secondary"
          sx={{ marginTop: "20px" }}
        >
          Login
        </Button>
    </form>
  );
}
