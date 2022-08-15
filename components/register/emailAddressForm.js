import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";
const EmailAddressForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <h5>Address Email</h5>
      <div
        className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""
          }`}
      >
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <Field name="email">
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
                type="email"
                placeholder="Email"
                className={`${styles.formControl} form-control border-none mt-2`}
              />
            );
          }}
        </Field>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <ErrorMessage name="email" render={(msg) => <Error error={msg} />} />
      </div>
    </>
  );
};

export default EmailAddressForm;
