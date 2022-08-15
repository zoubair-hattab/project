import React from "react";
import CountryID from "@/utils/verify_identity/country_id";
import IdentityType from "@/utils/verify_identity/identity_type";
import DropzoneIdentity from "@/utils/verify_identity/dropzone_identity";
import Error from "@/utils/error";
import { ErrorMessage } from "formik";

const VerifyIdentityForm = () => {
  return (
    <>
      <h5>Verify your identity</h5>
      <CountryID />
      <IdentityType />
      <DropzoneIdentity />
      <div className={`d-flex p-1 mt-2 justify-content-center`}>
        <div>
          <ErrorMessage
            name="identity_country"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="identity_type"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="id_image"
            render={(msg) => <Error error={msg} />}
          />
          <ErrorMessage
            name="selfie_image"
            render={(msg) => <Error error={msg} />}
          />
        </div>
      </div>
    </>
  );
};

export default VerifyIdentityForm;
