import { useState } from "react";
// import { useSignup } from "../hooks/useSignup";

import { useTheme } from "../../components/hooks/useTheme";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { color } = useTheme();

  // const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    // signup(email, password);
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
        <button className={styles.btn}>Bli medlem</button>
        {/* {error && <p>{error}</p>} */}
      </form>
    </div>
  );
}
