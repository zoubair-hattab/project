import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";
const CompanyDescriptionForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <h5>Company Description</h5>
      <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field name="company_title">
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
                  type="company_title"
                  placeholder="Company Title"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>

          <Field name="short_description">
            {({ field, form }) => {
              const { handleBlur } = form;
              return (
                <textarea
                  {...field}
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    handleBlur(e);
                  }}
                  placeholder="Short Description..."
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                  style={{ height: "100px" }}
                ></textarea>
              );
            }}
          </Field>

          <Field name="long_description">
            {({ field, form }) => {
              const { handleBlur } = form;
              return (
                <textarea
                  {...field}
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    handleBlur(e);
                  }}
                  placeholder="Long Description..."
                  className={`${styles.formControl} ${styles.formPassword} form-control border-none mt-2`}
                  style={{ height: "150px" }}
                ></textarea>
              );
            }}
          </Field>
        </div>
      </div>
      <div className="d-flex p-1 mt-2 justify-content-center">
        <div>
          <ErrorMessage
            name="company_title"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="short_description"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="long_description"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default CompanyDescriptionForm;
