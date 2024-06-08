import React, { useState } from "react";
import { useTheme } from "../../components/hooks/useTheme";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import { useSignup } from "../../components/hooks/useSignup";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { color } = useTheme();

  const { error, signup } = useSignup();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
          <button type="submit" className={styles.btn}>
            Bli medlem
          </button>
          <Link to="/login">Redan medlem? Logga in!</Link>
        </div>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
