import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../components/authservice";
import '../styling/loginpage.css';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const uid = await login(email, password);
      console.log("User logged in:", uid);
      navigate("/dashboard");
    } catch (error) {
      alert("Login gagal: " + error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
