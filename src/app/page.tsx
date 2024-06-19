"use client";

// Packages
import { useForm } from "react-hook-form";

// Components
import Button from "@/material/Button";
import InputField from "@/material/InputField";

import styles from "./page.module.css";

type LogInT = {
  email: string;
  password: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<LogInT>();

  function logIn(data: LogInT) {
    console.log(data);
  }

  return (
    <main className={styles.container} onSubmit={handleSubmit(logIn)}>
      <form className={styles.form}>
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
            register={register}
            required
            style={{
              borderRadius: "10px",
              padding: "2rem",
            }}
          />
        </div>

        <div className={styles.inputContainer}>
          <label>Password</label>
          <InputField
            name="password"
            placeholder="Your password.."
            type="password"
            register={register}
            required
            style={{
              borderRadius: "10px",
              padding: "2rem",
            }}
          />
          <span>Forgot Password?</span>
        </div>

        <Button name="LOGIN" type="submit" className={styles.loginButton} />
        <span className={styles.signUpLink}>
          Don’t have an account? <strong>Sign up for free</strong>
        </span>
      </form>
      <div className={styles.wallpaperContainer}></div>
    </main>
  );
}
