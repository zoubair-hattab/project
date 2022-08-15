import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/utils/error";
import styles from "@/styles/register.module.css";
const RoleCompanyForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <h5>Tell us about your role in the company</h5>
      <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>
        <div className="form-check">
          <Field
            type="radio"
            name="company_role"
            className="form-check-input"
            id="role_one"
            value="I am the only director and significiant shareholder"
            checked="on"
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          <label className="form-check-label" htmlFor="role_one">
            I am the only director and significiant shareholder
          </label>
        </div>

        <div className="form-check">
          <Field
            type="radio"
            name="company_role"
            className="form-check-input"
            id="role_two"
            value="I am one of the serval director or significiant shareholders"
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          <label className="form-check-label" htmlFor="role_two">
            I am one of the serval director or significiant shareholders
            <p className={`${styles.labelExeplination}`}>
              there are other directors or shareholders with greater the 25%
              ownership
            </p>
          </label>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="company_role"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default RoleCompanyForm;
