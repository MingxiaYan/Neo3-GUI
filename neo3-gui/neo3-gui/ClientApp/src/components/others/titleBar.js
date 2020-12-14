import React from "react";
import { withStyles, styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Tabs, Tab } from "@material-ui/core";

const TitleBar = (other) => {
  const props = { ...other };
  return (
    <div className="gui-title">
      <div className="title" {...other}></div>
    </div>
  );
};

const TitleSearch = withStyles({
  root: {
    background: "#F3F3F3",
    color: "#BBBBBB",
    border: "1px solid #D9D9D9",
    boxShadow: "none",
    cursor: "not-allowed",
    pointerEvents: "none",
  },
})(Button);

const TitleTabs = ({ color, ...other }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="tabs example"
    >
      <Tab label="Tab-1" />
      <Tab label="Tab-2" />
    </Tabs>
  );
};

export { TitleBar, TitleSearch, TitleTabs };
