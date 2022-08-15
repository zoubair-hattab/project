import React from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Dropzone = ({
  form,
  label = "Drop and Drop your files or click",
  field_name,
}) => {
  const { setFieldValue } = form;
  const { getRootProps, getInputProps, acceptedFiles } =
    useDropzone({
      onDrop: (acceptedFiles) => {
        setFieldValue(field_name, acceptedFiles);
      },
    });
  return (
    <>
      <div {...getRootProps({ className: "dropzone rounded-20" })}>
        <input {...getInputProps()} />
        {acceptedFiles.length == 0 ? (
          <div>
            <p>{label}</p>
            <div className="text-center mt-3">
              <AiOutlineCloudUpload fontSize={"30"} />
            </div>
          </div>
        ) : (
          <>
            {acceptedFiles[0].name}
          </>
        )}
      </div>
    </>
  );
};

export default Dropzone;
