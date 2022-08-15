import React, { useState } from "react";
import styles from "@/styles/register.module.css";
import { Field } from "formik";
import { countries } from "@/utils/countriesList";

const CountryId = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>
      <p className="py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div>
        <Field name="identity_country">
          {
            ({ form, field }) => {
              const { handleBlur } = form;
              return (
                <select as="select"
                  className={`${styles.formControl} form-select mt-2`}
                  {...field}
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    handleBlur(e);
                  }} >
                  <option value="" disabled defaultValue>
                    Choose a Country
                  </option>
                  {countries.map((country) => {
                    return (
                      <option value={country.counrty} key={country.code}>
                        {country.flag}
                        {"  "}
                        {country.name}
                      </option>
                    );
                  })}
                </select>
              )
            }
          }
        </Field>


        <p className={`${styles.labelExeplination} mt-3`}>
          Please be prepared to submit the following:
        </p>
        <ul className="list-unstyled ms-3">
          <li>
            <div
              className={`${styles.ulCircle}  d-inline-flex justify-content-center align-items-center rounded-circle mt-1 me-1`}
            >
              1
            </div>
            Goverment ID
          </li>
          <li>
            <div
              className={`${styles.ulCircle} d-inline-flex justify-content-center align-items-center rounded-circle mt-1 me-1`}
            >
              2
            </div>
            Selfie
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryId;
