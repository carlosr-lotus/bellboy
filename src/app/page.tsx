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
import Select, { SelectOption } from "@/material/Select";

type SignUpT = {
  name: string,
  email: string,
  password: string
}

type LogInT = Omit<SignUpT, "name">

export default function Home() {
  const { register, handleSubmit } = useForm<LogInT>();
  const api = getApi();

  const [isLoading, setIsLoading] = useState(false);
  const [screen, setScreen] = useState<'logIn' | 'signUp' | 'forgotPassword'>('logIn');
  

  function logIn({ email, password }: LogInT) {
    setIsLoading(true);
    
    api.get(`/login?email=${email}&password=${password}`)
      .then((res: AxiosResponse<LogInT[]>) => {
      if (res.data.length > 1) {
        console.log('User exists!')
      }
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
    })
  }

  const SignUp = (): JSX.Element => {
    const { 
      register: registerSignUp, 
      handleSubmit: handleSignUp 
    } = useForm<SignUpT>()

    const [country, setCountry] = useState<SelectOption>()
    const [countries, setCountries] = useState<SelectOption[]>([
      { value: 1, label: 'Brazil'}, 
      { value: 2, label: 'United States' }
    ])

    function SignUp({ name, email, password }: SignUpT) {
      api.post('/login/create', {
        name: name,
        email: email,
        password: password,
        country: country?.value
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }

    return (
      <form className={`${styles.form} ${styles.signUpForm}`} onSubmit={handleSignUp(SignUp)}>
        <h1 style={{ textAlign: "center" }}>LOGO</h1>
        <div className={styles.header}>
          <h1>Sign Up</h1>
        </div>

        <div className={styles.inputContainer}>
          <label>Name</label>
          <InputField
            name="name"
            placeholder="Your name.."
            type="text"
            register={registerSignUp}
            required
            style={{
              borderRadius: "10px",
              padding: "2rem",
            }}
          />
        </div>

        <div className={styles.inputContainer}>
          <label>Email</label>
          <InputField
            name="email"
            placeholder="Your email.."
            type="text"
            register={registerSignUp}
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
            register={registerSignUp}
            required
            style={{
              borderRadius: "10px",
              padding: "2rem",
            }}
          />
        </div>

        <div className={styles.inputContainer}>
          <label>Country</label>
          <Select 
            options={countries}
            value={country}
            onChange={(e) => setCountry(e)}
          />
        </div>

        <Button 
          name="SIGN UP" 
          type="submit" 
          className={styles.loginButton} 
          disabled={isLoading} 
        />
        <span className={styles.signUpLink} onClick={() => setScreen('logIn')}>
          Already have an account? <strong>Log in here</strong>
        </span>
      </form>
    )
  }

  return (
    <main className={styles.container}>
      {
        isLoading &&
        <Screen>
          <Loader />
        </Screen>
      }

      {
        screen === 'logIn' ?
          <form className={styles.form} onSubmit={handleSubmit(logIn)}>
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
            <span className={styles.signUpLink} onClick={() => setScreen('signUp')}>
              Don’t have an account? <strong>Sign up for free</strong>
            </span>
          </form>
        :
          <SignUp />
      } 
      <div className={styles.wallpaperContainer}></div>
    </main>
  );
}
