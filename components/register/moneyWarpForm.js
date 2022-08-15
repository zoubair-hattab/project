import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import styles from "@/styles/register.module.css";
import Error from "@/utils/error";

const MoneyWarpForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false)
  return (
    <>
      <h5>How many SGB/FLR do you want your community to wrap?</h5>
      <div className={`${styles.stepsForm} ${isTouched ? styles.isFocused : ""}`}>
        <div className="form-check">
          <Field
            type="radio"
            name="crypto_fund"
            className="form-check-input"
            id="sgb"
            value="SGB"
            checked="on"
            onFocus={() => {
              setIsTouched(true);
            }}
            onBlur={() => {
              setIsTouched(false);
            }}
          />
          <label className="form-check-label" htmlFor="sgb">
            SGB
          </label>
        </div>

        <div className="form-check">
          <Field
            type="radio"
            name="crypto_fund"
            className="form-check-input"
            id="flr"
            value="FLR"
            onFocus={() => {
              setIsTouched(true);
            }}
            onBlur={() => {
              setIsTouched(false);
            }}
          />
          <label className="form-check-label" htmlFor="flr">
            FLR
          </label>
        </div>

        <div className="form-check">
          <Field
            type="radio"
            name="crypto_fund"
            className="form-check-input"
            id="sgb/flr"
            value="SGB/FLR"
            onFocus={() => {
              setIsTouched(true);
            }}
            onBlur={() => {
              setIsTouched(false);
            }}
          />
          <label className="form-check-label" htmlFor="sgb/flr">
            SGB/FLR
          </label>
        </div>
      </div>





      <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <div className="d-flex">
          <Field name="money_fund">
            {({ field, form }) => {
              const { handleBlur } = form;
              return (
                <input
                  {...field}
                  type="number"
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  onBlur={(e) => {
                    setIsFocused(false);
                    handleBlur(e);
                  }}
                  placeholder="99999999"
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
            name="crypto_fund"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="money_fund"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default MoneyWarpForm;
