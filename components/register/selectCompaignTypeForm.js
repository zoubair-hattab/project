import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "@/utils/error";
import styles from "@/styles/register.module.css";
import { countries } from "@/utils/countriesList";

const SelectCompaignTypeForm = () => {
  const [isFirstOption, setIsFirstOption] = useState(true);

  return (
    <>
      <h5>Launch a new campaign</h5>
      <div
        className={`${styles.stepsForm} ${isFirstOption ? styles.isSelected : ""
          }`}
      >
        <div className="form-check">
          <Field name="compaign_type">
            {({ field, form }) => {
              const { handleChange, handleBlur } = form;
              return (
                <input
                  {...field}
                  name="compaign_type"
                  onChange={(e) => {
                    e.currentTarget.value ==
                      "I want to create a company campaign"
                      ? setIsFirstOption(true)
                      : null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  type="radio"
                  className="form-check-input"
                  id="company_compaign"
                  value="I want to create a company campaign"
                  checked={isFirstOption}
                />
              );
            }}
          </Field>
          <label className="form-check-label" htmlFor="company_compaign">
            I want to create a company campaign
          </label>
        </div>
        <p className="py-1 px-3">
          The company has a registered number and operates as a legal entity
          Country of incorporation
        </p>
        <div className="form-floating">
          <Field
            name="country_first_field"
            as="select"
            className={`${styles.formSelect} form-select selectpicker`}
            id="company_compaign_countries"
            aria-label="Country of incorporation"
          >
            <option value="" disabled defaultValue>
              Choose a Country
            </option>
            {countries.map((country) => {
              return (
                <option value={country.name} key={country.code}>
                  {country.flag} {"  "} {country.name}
                </option>
              );
            })}
          </Field>
          <label htmlFor="company_compaign_countries">
            Country of incorporation
          </label>
        </div>
      </div>

      <div
        className={`${styles.stepsForm} ${!isFirstOption ? styles.isSelected : ""
          }`}
      >
        <div className="form-check">
          <Field name="compaign_type">
            {({ field, form }) => {
              const { handleChange, handleBlur } = form;
              return (
                <input
                  {...field}
                  name="compaign_type"
                  onChange={(e) => {
                    e.currentTarget.value ==
                      "I want to create a Not for profit campaign"
                      ? setIsFirstOption(false)
                      : null;
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  type="radio"
                  className="form-check-input"
                  id="non_profit_compaign"
                  value="I want to create a Not for profit campaign"
                />
              );
            }}
          </Field>
          <label className="form-check-label" htmlFor="non_profit_compaign">
            I want to create a Not for profit campaign
          </label>
        </div>
        <p className="py-1 px-3">
          The Not for porfit has a charity number and operates as a legal entity
          Country of incorporation
        </p>
        <div className="form-floating">
          <Field
            name="country_second_field"
            as="select"
            className={`${styles.formSelect} form-select mt-2`}
            id="non_profit_compaign_countries"
            aria-label="Country of incorporation"
          >
            <option value="" disabled defaultValue>
              Choose a Country
            </option>
            {countries.map((country) => {
              return (
                <option value={country.name} key={country.code}>
                  {country.flag} {"  "} {country.name}
                </option>
              );
            })}
          </Field>
          <label htmlFor="non_profit_compaign_countries">
            Country of incorporation
          </label>
        </div>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="compaign_type"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="country_first_field"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="country_second_field"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default SelectCompaignTypeForm;
