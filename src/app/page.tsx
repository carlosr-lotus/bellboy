"use client";
import { Dispatch, SetStateAction, useState } from "react";

// Packages
import { useForm } from "react-hook-form";
import { AxiosResponse } from "axios";

// Components
import Button from "@/material/Button";
import InputField from "@/material/InputField";
import Loader from "@/material/Loader"
import Modal from "@/material/Modal";
import Screen from "@/material/Screen";
import Select, { SelectOption } from "@/material/Select";

// Utils
import { getApi } from "@/utils/api";

// Icons
import { FaCheckCircle } from "react-icons/fa";

import styles from "./page.module.css";

type SignUpT = {
  name: string,
  email: string,
  password: string
}

type LogInT = Omit<SignUpT, "name">

type ForgotPassword = {
  setModalState: Dispatch<SetStateAction<boolean>>
}

export default function Home() {
  const { register, handleSubmit } = useForm<LogInT>();
  const api = getApi();

  const [isLoading, setIsLoading] = useState(false);
  const [screen, setScreen] = useState<'logIn' | 'signUp'>('logIn');
  const [forgotPassword, setForgotPassword] = useState(false)

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

  const ForgotPasswordModal = ({ setModalState }: ForgotPassword): JSX.Element => {

    const [tabIndex, setTabIndex] = useState(0)

    function resetPassword(email: string, password: string) {
      api.put('/login/resetPassword', {
        email: email,
        password: password
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }

    return (
      <Screen>
        <Modal setState={setModalState}>
          {
            tabIndex === 0 &&
              <>
                <h3>Forgot password?</h3>
                <p>We will send a code to your email in order to reset your password.</p>
                <InputField name="email" type="text" placeholder="Your account email" register={() => {}} />
                <Button className={styles.buttonNext} name="Send" type="button" onClick={() => setTabIndex(1)}/>
              </>
          } 

          {
            tabIndex === 1 &&
              <>
                <h3 style={{ display: 'flex', gap: '.4rem', alignItems: 'center'}}>
                  Code sent! 
                  <FaCheckCircle fill="var(--Status-Green)"/> 
                </h3>
                <p>Now insert the code that we just sent to your email.</p>
                <InputField name="code" type="text" placeholder="Your code" register={() => {}}/>
                <div style={{ display: 'flex', gap: '.5rem'}}>
                  <Button className={styles.buttonBack} name="Back" type="button" onClick={() => setTabIndex(0)}/>
                  <Button className={styles.buttonNext} name="Next" type="button" onClick={() => setTabIndex(2)}/>
                </div> 
              </>
          }    

          {
            tabIndex === 2 &&
              <>
                <h3>Reset password</h3>
                <p>Now insert your <b>new</b> password.</p>
                <InputField name="newPassword" type="password" placeholder="New password" register={() => {}}/>
                <div style={{ display: 'flex', gap: '.5rem'}}>
                  <Button className={styles.buttonBack} name="Back" type="button" onClick={() => setTabIndex(1)}/>
                  <Button className={styles.buttonNext} name="Create" type="button" onClick={() => resetPassword('', '')}/>
                </div> 
              </>
          }
        </Modal>
      </Screen>
    )
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
        forgotPassword &&
          <ForgotPasswordModal setModalState={setForgotPassword} />
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
              <span className={styles.forgotPassword} onClick={() => setForgotPassword(true)}>Forgot Password?</span>
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
