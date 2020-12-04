import React from "react";
import { InputLabel } from "@material-ui/core";

const TextLabel = (other) => <InputLabel {...other} />;
const TitleLabel = (other) => <div className="title-label" {...other}></div>;

export { TextLabel, TitleLabel };
