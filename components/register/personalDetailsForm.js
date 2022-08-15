import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";
const PersonalDetialsForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <h5>Personal Details</h5>
      <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field name="first_name">
            {({ field, form }) => {
              const { handleBlur } = form;
              return (
                <input
                  {...field}
                  type="text"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    handleBlur(e);
                  }}
                  placeholder="First Name"
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="last_name">
            {({ field, form }) => {
              const { handleBlur } = form;
              return (
                <input
                  {...field}
                  type="text"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    handleBlur(e);
                  }}
                  placeholder="Last Name"
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="date_birthday">
            {({ field, form }) => {
              const { handleBlur } = form;
              return (
                <input
                  {...field}
                  type="date"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    handleBlur(e);
                  }}
                  placeholder=""
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="first_name"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="last_name"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="date_birthday"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default PersonalDetialsForm;
