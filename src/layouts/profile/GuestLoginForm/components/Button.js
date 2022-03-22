import React from "react";
import MDButton from "components/MDButton";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",
    color: "info",
    size:"medium",
    onClick: handleSubmit,
    
  };

  return <MDButton  {...configButton}>{children}</MDButton>;
};

export default ButtonWrapper;
