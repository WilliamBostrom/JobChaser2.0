import { useState } from "react";

import { useTheme } from "../../components/hooks/useTheme";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useSignup } from "../../components/hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { color } = useTheme();

  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div>
      <form
        style={{ background: color }}
        onSubmit={handleSubmit}
        className={styles["login-form"]}
      >
        <h2>Signup</h2>

        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>

        <div className={styles["btns-login"]}>
          <button className={styles.btn}>Bli medlem</button>
          <Link to="/login">Redan medlem? Logga in!</Link>
        </div>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
