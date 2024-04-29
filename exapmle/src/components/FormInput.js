import React, { useState } from "react";

function FormInput(props) {
  const { label, name, placeholder, onInput } = props;

  return (
    <>
      <label>{label}</label>
      <input
        name={name}
        onInput={onInput}
        placeholder={placeholder}
      />
    </>
  );
}

export default FormInput;