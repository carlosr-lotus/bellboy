"use client";

// Components
import Button from "@/material/Button";
import InputField from "@/material/InputField";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 style={{ textAlign: "center" }}>LOGO</h1>
      <div className={styles.header}>
        <h1>Welcome back!</h1>
        <p>Good to see you again! How may I be of service?</p>
      </div>

      <div className={styles.inputContainer}>
        <label>Email</label>
        <InputField
          name="email"
          placeholder="Your email.."
          type="text"
          register={() => {}}
          style={{
            borderRadius: "10px",
            padding: "1.5rem",
          }}
        />
      </div>

      <div className={styles.inputContainer}>
        <label>Password</label>
        <InputField
          name="password"
          placeholder="Your password.."
          type="password"
          register={() => {}}
          style={{
            borderRadius: "10px",
            padding: "1.5rem",
          }}
        />
        <span>Forgot Password?</span>
      </div>

      <Button name="LOGIN" type="button" className={styles.loginButton} />
      <span className={styles.signUpLink}>
        Don’t have an account? <strong>Sign up for free</strong>
      </span>
    </main>
  );
}
