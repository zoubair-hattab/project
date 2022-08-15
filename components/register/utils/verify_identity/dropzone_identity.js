import React, { useState } from "react";
import styles from "@/styles/register.module.css";
import Dropzone from "@/utils/dropzone";
import { Field } from "formik";

const DropzoneIdentity = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`${styles.stepsForm} ${isFocused ? styles.isFocused : ""}`}>

      <p className="py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <>
        <div className={`${styles.dropzoneInput}`}
          onDragOver={() => setIsFocused(true)}
          onDragLeave={() => setIsFocused(false)}
          onClick={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}>
          <Field name="id_image" >
            {({ form }) => {
              const { values } = form;
              const { identity_type } = values;
              return (
                <Dropzone
                  form={form}
                  label={`Drag 'n' drop your ${!identity_type ? "Government ID " : identity_type
                    }`}
                  field_name={"id_image"}
                />
              );
            }}
          </Field>
        </div>

        <div className={`${styles.dropzoneInput} mt-2`}
          onDragOver={() => setIsFocused(true)}
          onDragLeave={() => setIsFocused(false)}
          onClick={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}>
          <Field name="selfie_image" type="file">
            {({ form }) => {
              return (
                <Dropzone
                  form={form}
                  label="Drag 'n' drop your selfie"
                  field_name={"selfie_image"}
                />
              );
            }}
          </Field>
        </div>
      </>
    </div>
  );
};

export default DropzoneIdentity;
