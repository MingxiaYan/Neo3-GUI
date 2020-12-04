import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "0",
    position: "relative",
    textAlign: "center",
    zIndex: "2",
    "&::after": {
      content: "' '",
      position: "absolute",
      width: "100%",
      height: "1px",
      background: "rgba(0, 0, 0, 0.2)",
      left: 0,
      top: "50%",
      zIndex: "-1",
    },
  },
  text: {
    color: "rgba(0, 0, 0, 0.65)",
    background: "#FFFFFF",
    padding: "0 10px",
    fontSize: "16px",
  },
});

const Dividers = (other) => {
  const classes = useStyles();
  const props = { ...other };
  return (
    <div className={props.className + " " + classes.root}>
      <span className={classes.text}>{props.children}</span>
    </div>
  );
};

export { Dividers };
