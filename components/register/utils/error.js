import React from "react";
import PropTypes from "prop-types";
import { FiAlertTriangle } from "react-icons/fi";
const Error = ({ error }) => {
  return (
    <div className="text-danger">
      <FiAlertTriangle className="mb-1" /> {error}
    </div>
  );
};
Error.defaultProps = {
  error: "This Field is required",
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
