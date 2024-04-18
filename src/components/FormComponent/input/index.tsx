"use client";
import { ReactNode, useState } from "react";

import { ChangeHandler } from "react-hook-form";
import { Error } from "../error/index";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import styles from "./input.module.css";

/**
 * Hobpanion Input component
 *
 * @returns
 */
export function Input({
  id,
  field,
  error,
  placeholder,
  icon,
  type = "text",
}: {
  id: string;
  field?: {
    value: string | number;
    onChange: ChangeHandler | ((e: any) => void);
    onBlur: ChangeHandler | ((e: any) => void);
    ref: any;
  };
  error?: string;
  label?: string;
  placeholder?: string;
  variant?: "default" | "curved";
  icon?: ReactNode;
  type?: "text" | "password" | "email" | "date" | "number";
}) {
  const [inputType, setInputType] = useState(type);

  return (
    <div className={styles.container}>
      <div className={`${styles.input} `}>
        {icon && <div className={styles.icon}>{icon}</div>}

        <input
          id={id}
          placeholder={placeholder || undefined}
          ref={field?.ref}
          onChange={(e) =>
            field?.onChange({ target: { value: e.target.value } })
          }
          type={inputType}
        />

        {type === "password" && (
          <div
            className={styles.toggle}
            onClick={() => {
              if (inputType === "password") setInputType("text");
              else setInputType("password");
            }}
          >
            {inputType === "password" ? (
              <MdOutlineVisibilityOff
                style={{ width: "100%", height: "100%", color: "#61676A" }}
              />
            ) : (
              <MdOutlineVisibility
                style={{ width: "100%", height: "100%", color: "#61676A" }}
              />
            )}
          </div>
        )}
      </div>

      {error && <Error>{error}</Error>}
    </div>
  );
}
