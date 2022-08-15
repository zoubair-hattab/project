import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";
import { countries } from "@/utils/countriesList";
const HomeAddressForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <h5>Home Address</h5>
      <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field name="country">
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
                        <option value={country.name} key={country.code}>
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

          <Field name="zip_code">
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
                  placeholder="Zip Code"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="address_one">
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
                  placeholder="Address One"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="address_two">
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
                  placeholder="Address Two (Optional)"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="city">
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
                  placeholder="City"
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
            name="country"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="zip_code"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="address_one"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="address_two"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage name="city" render={(msg) => <Error error={msg} />} />
        </div>
      </div>
    </>
  );
};

export default HomeAddressForm;
