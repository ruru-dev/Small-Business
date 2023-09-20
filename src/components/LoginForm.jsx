import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

export default function LoginForm({ loginUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  
  function handleSubmit(e) {
    e.preventDefault();
    loginUser({username, password})
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="standard-form">
      <TextField required label="Username" variant="standard" onChange={(e) => setUsername(e.target.value)} type="email"/>
      <TextField required label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} type="password" />
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
