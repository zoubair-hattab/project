import React, { useState } from "react";
import styles from "@/styles/register.module.css";
import Dropzone from "@/utils/dropzone";
import { ErrorMessage, Field } from "formik";
import Error from "@/utils/error";

const CompaignLogoAndImage = () => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <>
            <h5>Compaign Logo and photo</h5>
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
                        <Field name="compaign_logo" >
                            {({ form }) => {
                                const { values } = form;
                                const { identity_type } = values;
                                return (
                                    <Dropzone
                                        form={form}
                                        label={`Drag 'n' drop your compaign logo`}
                                        field_name={"compaign_logo"}
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
                        <Field name="compaign_photo" type="file">
                            {({ form }) => {
                                return (
                                    <Dropzone
                                        form={form}
                                        label="Drag 'n' drop your compaign photo"
                                        field_name={"compaign_photo"}
                                    />
                                );
                            }}
                        </Field>
                    </div>
                </>
            </div>
            <div className={`d-flex p-1 mt-2 justify-content-center`}>
                <div>
                    <ErrorMessage
                        name="compaign_logo"
                        render={(msg) => <Error error={msg} />}
                    />
                    <ErrorMessage
                        name="compaign_photo"
                        render={(msg) => <Error error={msg} />}
                    />
                </div>
            </div>
        </>
    );
};

export default CompaignLogoAndImage;
