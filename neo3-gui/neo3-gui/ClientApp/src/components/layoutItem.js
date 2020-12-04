import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//style
const useStyles = makeStyles({
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
    color: "#000b",
    paddingLeft: "51px",
  },
});

const Layout = (other) => <ul {...other}></ul>;

//左侧导航栏-图标
function LayoutHead(props) {
  const classes = useStyles();
  return (
    <li className={classes.head}>
      <span className={classes.icon}>{props.icon}</span>
      {props.title}
    </li>
  );
}

//左侧导航栏-文本
function LayoutItem(props) {
  const { primary, to } = props;
  const classes = useStyles();
  return (
    <li className={props.className}>
      <Link className={classes.text} to={to}>
        {primary}
      </Link>
    </li>
  );
}

LayoutItem.propTypes = {
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export { Layout, LayoutHead, LayoutItem };
