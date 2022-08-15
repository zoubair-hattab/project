import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import { countries } from "@/utils/countriesList";
import Error from "@/utils/error";

const PhoneNumberForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <h5>Phone Number</h5>
      <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""
        }`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="d-flex">
          <Field name="full_phone_number.country_code">
            {
              ({ form, field }) => {
                const { handleBlur } = form;
                return (
                  <select as="select"
                    className={`${styles.phoneNumberSelect} form-select mt-2`}
                    {...field}
                    onFocus={() => {
                      setIsFocused(true);
                    }}
                    onBlur={(e) => {
                      setIsFocused(false);
                      handleBlur(e);
                    }} >
                    {countries.map((country) => {
                      return (
                        <option value={country.dial_code} key={country.code}>
                          {country.flag} {country.dial_code}
                        </option>
                      );
                    })}
                  </select>
                )
              }


            }
          </Field>

          <Field name="full_phone_number.phone_number">
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
                  onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                  placeholder="Mobile Number"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="full_phone_number.country_code"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="full_phone_number.phone_number"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default PhoneNumberForm;
