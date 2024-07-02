"use client";
import { useState } from "react";

// Packages
import { useForm } from "react-hook-form";
import { AxiosResponse } from "axios";

// Components
import Button from "@/material/Button";
import InputField from "@/material/InputField";
import Loader from "@/material/Loader"

// Utils
import { getApi } from "@/utils/api";

import styles from "./page.module.css";
import Screen from "@/material/Screen";

type LogInT = {
  email: string;
  password: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<LogInT>();
  const api = getApi();

  const [isLoading, setIsLoading] = useState(false);

  function logIn({ email, password }: LogInT) {
    setIsLoading(true);
    setTimeout(() =>
      api.get(`/users?email=${email}&password=${password}`)
        .then((res: AxiosResponse<LogInT[]>) => {
          if (res.data.length > 1) {
            console.log('User exists!')
          }
          setIsLoading(false);
        }).catch((err) => {
          setIsLoading(false);
        })
      , 2500);

  }

  return (
    <main className={styles.container} onSubmit={handleSubmit(logIn)}>
      {
        isLoading &&
        <Screen>
          <Loader />
        </Screen>
      }

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
          <span className={styles.forgotPassword}>Forgot Password?</span>
        </div>

        <Button name="LOGIN" type="submit" className={styles.loginButton} disabled={isLoading} />
        <span className={styles.signUpLink}>
          Don’t have an account? <strong>Sign up for free</strong>
        </span>
      </form>
      <div className={styles.wallpaperContainer}></div>
    </main>
  );
}
