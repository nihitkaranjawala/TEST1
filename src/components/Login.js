import { useState } from "react";

function Login({ setRole }) {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username === "admin") {
      setRole("admin");
    } else {
      setRole("faculty");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
