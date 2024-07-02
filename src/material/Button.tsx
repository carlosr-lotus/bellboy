"use client";
import { CSSProperties, RefObject } from "react";

import styles from "@/styles/material/Button.module.css";

type ButtonProps = {
  name: string;
  type: "button" | "submit" | "reset";
  ref?: RefObject<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
  onClick?: () => any;
  disabled?: boolean;
};

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button
      className={`${styles.buttonClass} ${props.className}`}
      type={props.type}
      ref={props.ref}
      onClick={() => (props.onClick ? props.onClick() : null)}
      style={props.style ? props.style : {}}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
}
