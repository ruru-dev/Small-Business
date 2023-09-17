import LoginForm from "./LoginForm";

export default function LoginPage({ setIsLoggedIn }) {
  return (
    <>
      <LoginForm setIsLoggedIn={setIsLoggedIn} />
    </>
  );
}
