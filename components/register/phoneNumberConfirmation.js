import React, { useContext, useState } from "react";
import styles from "@/styles/register.module.css";
import { ValuesContext } from "../../pages/register";
import { Field, ErrorMessage } from "formik";
import Error from "@/utils/error";

const PhoneNumberConfrimationForm = () => {
  const { returnToPhone , values } = useContext(ValuesContext);
  const [isFocused, setIsFocused] = useState(false);

  // Handle the api for send the email verfivaction
  const ResendConfirmationNumber = () =>{
    console.log(`The phone number for conformation: ${values.full_phone_number}`);
  }

  return (
    <>
      <h5>Phone Number Confirmation</h5>
      <div className={`${styles.stepsForm}  ${isFocused ? styles.isFocused : ""}`}>
        <p className="py-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
          <button
            className="btn btn-link p-0 mb-2 ms-1"
            type="button"
            onClick={returnToPhone}
          >
            Edit your number
          </button>
        </p>
        <div className={`${styles.inputGroup} input-group`}>
          <span className={`${styles.inputTextForm} border-none input-group-text my-2`} id="emailConfirmationCode">CL - </span>
          <Field type="text"
            maxLength={6}
            name="validation_phone_number"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
            className={`${styles.formControl} form-control border-none my-2 form-control`}
            aria-describedby="phoneConfirmationCode" />

        </div>
        <p>
          Didn&apos;t get teh SMS?
          <button
            className="btn btn-link p-0 mb-1 ms-1 text-decoration-none"
            type="button"
            onClick={ResendConfirmationNumber}
          >
            Resend the code
          </button>
        </p>
      </div>
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="validation_phone_number"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default PhoneNumberConfrimationForm;
