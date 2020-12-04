import React from "react";
import { withStyles, styled } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { Grid, CssBaseline } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const SignInSide = (props) => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstname" ref={register} /> {/* register an input */}
      <input name="lastname" ref={register({ required: true })} />
      {errors.lastname && "Last name is required."}
      <input name="age" ref={register({ pattern: /\d+/ })} />
      {errors.age && "Please enter number for age."}
      <input type="submit" />
    </form>
  );
};

export { SignInSide };
