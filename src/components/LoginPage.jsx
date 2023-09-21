import { Box } from "@mui/material";
import LoginForm from "../containers/LoginForm";

export default function LoginPage({ user }) {
  return (
    <Box sx={{ marginTop: 15 }}>
      <LoginForm />
    </Box>
  );
}
