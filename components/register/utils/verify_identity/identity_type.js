import React, { useState } from "react";
import { Field } from "formik";
import styles from "@/styles/register.module.css";
import { AiOutlineCar } from "react-icons/ai";
import { GiPassport } from "react-icons/gi";
import { HiOutlineIdentification } from "react-icons/hi";
const IdentityType = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>
      <p className="py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <>
        <div
          className={`${styles.radioInput} d-flex align-items-center rounded-3`}
        >
          <Field
            type="radio"
            name="identity_type"
            id="driving_licence"
            value="driving licence"
            className={`${styles.inputRadioButton}`}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          <label
            className={`${styles.formRadioLabel}`}
            htmlFor="driving_licence"
          >
            <AiOutlineCar className={`${styles.iconsRadio}`} /> Driving licence
          </label>
        </div>

        <div
          className={`${styles.radioInput} d-flex align-items-center my-2 rounded-3`}
        >
          <Field
            type="radio"
            name="identity_type"
            id="passport"
            value="passport"
            className={`${styles.inputRadioButton}`}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          <label className={`${styles.formRadioLabel}`} htmlFor="passport">
            <GiPassport className={`${styles.iconsRadio}`} /> Passport
          </label>
        </div>

        <div
          className={`${styles.radioInput} d-flex align-items-center rounded-3`}
        >
          <Field
            type="radio"
            name="identity_type"
            id="national_identity_card"
            value="national identity card"
            className={`${styles.inputRadioButton}`}
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
          />
          <label
            className={`${styles.formRadioLabel}`}
            htmlFor="national_identity_card"
          >
            <HiOutlineIdentification className={`${styles.iconsRadio}`} />{" "}
            National identity card
          </label>
        </div>
      </>
    </div>
  );
};

export default IdentityType;
