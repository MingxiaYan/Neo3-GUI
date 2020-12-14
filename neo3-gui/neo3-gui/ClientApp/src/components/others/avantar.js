import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const GuiAvantar = (other) => {
  const props = { ...other };
  console.log(props);
  let color = "#fff";
  const colorList = ["#000", "#f00", "#FF0", "#0FF"];
  if (!props.readom) {
    color = colorList[Math.floor(Math.random() * colorList.length)];
  }

  const classes = makeStyles({
    root: {
      background: color,
    },
  })();

  return (
    <div>
      <img {...other} className={1}></img>
      <div className={classes.root}>{color}</div>
    </div>
  );
};

export { GuiAvantar };
