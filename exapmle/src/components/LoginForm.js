import React, { useState } from "react";
import FormInput from "./FormInput";

const email = 'digitalAcademy@gmail.com';
const pass = 'iLoveReact123';


const config = [
  {
    label: 'email',
    placeholder: 'email',
    name: 'email'
  },
  {
    label: 'password',
    placeholder: 'password',
    name: 'password'
  }
];


const LoginForm = (props) => {
  const { onSubmit } = props;

  const [user, setUser] = useState({ email: "", password: "" });
  const disabled = user.email !== email || user.password !== pass;


  return (
    <form onSubmit={onSubmit}>
      {config.map(field => (
        <FormInput
          key={field.name}
          name={field.name}
          label={field.label}
          placeholder={field.placeholder}
          onInput={(e) => {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
      ))}
      <button type="submit" disabled={disabled}>Submit </button>
      <div></div>
    </form>
  );
};

export default LoginForm;