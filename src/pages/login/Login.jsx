import { useState } from "react";
import { useTheme } from "../../components/hooks/useTheme";
import { Link } from "react-router-dom";
//styles
import styles from "./Login.module.css";
import { useLogin } from "../../components/hooks/useLogin";

function Login() {
  const { color } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
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
      <div className={styles["btns-login"]}>
        <button className={styles.btn}>Logga in</button>
        {error && <p>{error}</p>}

        <Link to="/signup">Bli medlem</Link>
      </div>
    </form>
  );
}

export default Login;
