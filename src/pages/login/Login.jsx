import { useState } from "react";
import { useTheme } from "../../components/hooks/useTheme";
import { Link } from "react-router-dom";

//styles
import styles from "./Login.module.css";

function Login() {
  const { color } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefaul();

    console.log(email, password);
  };

  return (
    <form
      style={{ background: color }}
      onSubmit={handleSubmit}
      className={styles["login-form"]}
    >
      <h2>Logga in</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="username"
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="password"
        />
      </label>
      <button className={styles.btn}>Logga in</button>
      <Link to="/signup">Bli medlem</Link>
    </form>
  );
}

export default Login;
