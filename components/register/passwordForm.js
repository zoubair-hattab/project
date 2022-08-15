import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
const PasswordForm = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <h5>Create Password</h5>
      <div className={`${styles.stepsForm}  ${isFocused ? styles.isFocused : ""}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="input-group">
          <Field name="password">
            {({ field, form }) => {
              const { handleBlur } = form;
              return (
                <input
                  {...field}
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    handleBlur(e);
                  }}
                  type={isHidden ? "password" : "text"}
                  placeholder="Password"
                  className={`${styles.formControl}  form-control border-end mt-2`}
                  aria-describedby="show-hide-password"
                />
              );
            }}
          </Field>
          <span
            className={`${styles.inputTextForm} input-group-text mt-2`}
            id="show-hide-password"
            onClick={() => setIsHidden(!isHidden)}
          >
            {isHidden ? (
              <AiFillEye className={`${styles.icons}`} />
            ) : (
              <AiFillEyeInvisible className={`${styles.icons}`} />
            )}
          </span>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <ErrorMessage name="password" render={(msg) => <Error error={msg} />} />
      </div>
    </>
  );
};

export default PasswordForm;
