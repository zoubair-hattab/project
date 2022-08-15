import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";
const SocialLinksForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <h5>Social Profile</h5>
      <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="">
          <Field name="company_url">
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
                  placeholder="Company Web site"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="twitter">
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
                  placeholder="twitter"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="linkedin">
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
                  placeholder="Linkedin (Optional)"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="instagram">
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
                  placeholder="Instagram (Optional)"
                  className={`${styles.formControl} form-control border-none mt-2`}
                />
              );
            }}
          </Field>
          <Field name="facebook">
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
                  placeholder="Facebook (Optional)"
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
            name="company_url"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="twitter"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="linkedin"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="instagram"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="facebook"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default SocialLinksForm;
