import React, { useState, createContext } from "react";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Title from "@/components/title";
import styles from "@/styles/register.module.css";
import { Formik, Form } from "formik";
import Button from "@/components/button";
import validationSchemaArray from "@/utils/validationSchema";
import ProgressCircle from "@/utils/progressCircle";
import stepContentArray from "@/utils/steps";
import initialValues from "@/utils/initialValues";
import Link from "next/link";
import ArrowBack from "../public/images/svg/arrow_back.svg"
import Image from "next/image";

// handle the api request
const handleForm = (values, actions) => {
  actions.setSubmitting(false);
  console.log(values);
};

export const ValuesContext = createContext();

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [percentage, setPercentage] = useState(0)
  const isLastStep = activeStep == stepContentArray.length - 1;

  // Handle the email verfication number api
  const handleConfirmationEmailNumber = (values, actions) => {
    if (values.validation_email_number == 123456) {
      setActiveStep(activeStep + 1);
    } else {
      actions.setFieldError(
        "validation_email_number",
        "Oops! uncorrect  email confirmation number ."
      );
    }
  };

  // handle the phone verfication number api
  const handleConfirmationPhoneNumber = (values, actions) => {
    if (values.validation_phone_number == 123456) {
      setActiveStep(activeStep + 1);
    } else {
      actions.setFieldError(
        "validation_phone_number",
        "Oops! uncorrect phone confirmation number ."
      );
    }
  };

  // handle send email confirmation number  
  const SendComfirmationEmailNumber = (values, actions) => {
    console.log(values.email);
    setPercentage(Math.floor(percentage + 5.8))
    setActiveStep(activeStep + 1);
  }

  // handle send phone confirmation number  
  const SendComfirmationPhoneNumber = (values, actions) => {
    console.log(values.full_phone_number);
    setPercentage(Math.floor(percentage + 5.8))
    setActiveStep(activeStep + 1);
  }


  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      handleForm(values, actions);
    } else {
      setPercentage(Math.floor(percentage + 5.8))
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handlePreviousStep = () => {
    setPercentage(Math.ceil(percentage - 5.8))
    setActiveStep(activeStep - 1);
  };

  const returnToEmail = () => {
    setPercentage(Math.ceil(percentage - 5.8))
    setActiveStep(1);
  };

  const returnToPhone = () => {
    setPercentage(Math.ceil(percentage - 5.8))
    setActiveStep(3);
  };

  return (
    <div>
      <Title pageName={"Register"} />
      <Nav component={<NavComponent />} black={true} />
      <div className="container py-3">
        <h2 className="text-center text-roboto">Launch A New Compaign</h2>
        <p className="text-robot mt-2 text-center cf-gray6f">
          Please fill the form below to to launch a new compaign.
        </p>

        <div className={`d-flex justify-content-center mt-5`}>
          <Formik
            initialValues={initialValues}
            onSubmit={
              activeStep == 1
                ? SendComfirmationEmailNumber
                : activeStep == 2
                  ? handleConfirmationEmailNumber
                  : activeStep == 3 ?
                    SendComfirmationPhoneNumber
                    : activeStep == 4
                      ? handleConfirmationPhoneNumber
                      : handleSubmit
            }
            validationSchema={validationSchemaArray[activeStep]}
          >
            {(formik) => {
              return (
                <Form className={`${styles.form}`}>
                  {activeStep > 0 && activeStep < 18 && (
                    <Button
                      variant="bg-transparent"
                      classStyle={`mb-5 btn`}
                      click={handlePreviousStep}
                    >
                      <Image src={ArrowBack} alt="arrow back" height={20} width={20} color={"red"} />
                    </Button>
                  )}

                  <div className={`${styles.formContent} bg-white rounded-20`}>
                    <ProgressCircle percentage={activeStep == 18 ? 100 : percentage} />
                    <hr />
                    <ValuesContext.Provider
                      value={{
                        returnToEmail,
                        returnToPhone,
                        values: formik.values,
                      }}
                    >
                      {stepContentArray[activeStep]}
                    </ValuesContext.Provider>
                  </div>

                  <div className={`d-flex justify-content-center mt-5`}>
                    {
                      activeStep != 18 ? (<button
                        // disabled={formik.isSubmitting}
                        type="submit"
                        className={`${styles.btn} btn btn-black rounded-pill py-2`}
                      >
                        {isLastStep
                          ? "Submit"
                          : activeStep == 2 || activeStep == 4
                            ? "confirm"
                            : "Continue"}
                      </button>) : null
                    }
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;


export const NavComponent = () => {
  return (
    <Link href="/faq">
      <a className="text-bodoni text-black nav-link text-decoration-underline">
        What is CloudFunding?
      </a>
    </Link>
  )
}