import React from "react";
import { TextField, Select } from "@material-ui/core";

const InputArea = (other) => <TextField {...other} />;
const SelectArea = (other) => <Select {...other} />;

export { InputArea, SelectArea };
