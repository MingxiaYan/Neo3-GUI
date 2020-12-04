import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  head: {
    color: "#000",
  },
  icon: {
    verticalAlign: "middle",
    fontSize: "21px",
    paddingLeft: "20px",
    paddingRight: "10px",
  },
  text: {
    paddingLeft: "51px",
  },
});

function LayoutList(props) {
  const { head, route } = props.array;
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {head ? (
        <li className={classes.head}>
          <span className={classes.icon}>{head.icon}</span>
          {head.name}
        </li>
      ) : null}
      {route.map((item, index) => (
        <li key={index}>
          <Link className={classes.text} to={item.link}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { LayoutList };
