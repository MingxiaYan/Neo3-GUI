import React from "react";
import { withStyles, styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const GuiButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: "#00AF92",
  border: "1px solid #00AF92",
  borderRadius: 0,
  boxShadow: "none",
  color: "#FFFFFF",
  width: "100%",
  margin: "12px 0",
});

const UnableButton = withStyles({
  root: {
    background: "#F3F3F3",
    color: "#BBBBBB",
    border: "1px solid #D9D9D9",
    boxShadow: "none",
    cursor: "not-allowed",
    pointerEvents: "none",
  },
})(GuiButton);

const GuiRadio = (other) => {
  const props = { ...other };
  return (
    <div className="radio-box">
      <input
        className="radio-btn"
        type="radio"
        name={props.name}
        value={props.label}
        id={"radios" + props.value}
      ></input>
      <label htmlFor={"radios" + props.value}>{props.value}</label>
    </div>
  );
};

export { GuiButton, UnableButton, GuiRadio };
