import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { TitleBar, TitleTabs } from "@/components/others/titleBar";
import { useForm } from "react-hook-form";
// import { SignInSide } from "@/components/login";
import { useStyles } from "@/styles/site";
import {
  FormControl,
  TextField,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

import { Dividers } from "@/components/dividers";

import { GuiGrid } from "@/components/others/grid";

import { GuiButton, UnableButton, GuiRadio } from "@/components/others/button";
import { InputArea, SelectArea } from "@/components/others/input";
import { TitleLabel } from "@/components/others/label";
import { GuiMd } from "@/components/markdown";

@withStyles(useStyles)
class Demo extends React.Component {
  // let history = useLocation();
  render() {
    const { routes } = this.props.route;
    console.log(routes);
    return (
      <div className="container">
        <Link to="/">回到首页</Link>
        <Link to="/">未登录状态</Link>
        <Dividers className="text-l">Dividers</Dividers>
        <Dividers className="text-r">Dividers</Dividers>
        <Dividers className="text-c">Dividers</Dividers>
        <GuiGrid container spacing={3}>
          <GuiGrid item xs={3}>
            <GuiButton>Normal</GuiButton>
          </GuiGrid>
          <GuiGrid item xs={3}>
            <UnableButton>Unclick</UnableButton>
          </GuiGrid>
          <GuiGrid item xs={3}>
            <GuiButton className="btn-white">Normal</GuiButton>
          </GuiGrid>
        </GuiGrid>
        <div className="mt4">
          <TitleBar>GUI-Title</TitleBar>
        </div>

        <div className="mt4">
          <TitleTabs></TitleTabs>
        </div>
        <div className="mt4">
          <TextField id="standard-basic" label="Standard" />

          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
        </div>
        <div>
          <TitleLabel>交易详情-title</TitleLabel>
        </div>

        <TitleLabel>radio</TitleLabel>
        <div>
          <GuiRadio value="a" name="prikey" />
          <GuiRadio value="b" name="prikey" />
          <GuiRadio value="c" name="prikey" />
        </div>

        <div className="w50">
          <Formtest />
        </div>

        <div>
          <TitleBar>GUI-MarkDown文档</TitleBar>
          <GuiMd></GuiMd>
        </div>

        {renderRoutes(routes)}
      </div>
    );
  }
}

const Formtest = (props) => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input name="firstname" ref={register} />  */}
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField
        label="Required"
        name="name"
        id="name"
        required
        error={Boolean(errors.name)}
        helperText={errors.name ? errors.name.message : "input your name"}
        inputRef={register({
          required: "no name is dame",
          maxLength: { value: 10, message: "too long" },
        })}
      />
      <TextField
        label="password"
        name="password"
        id="password"
        error={Boolean(errors.password)}
        helperText={
          errors.password ? errors.password.message : "input your password"
        }
        inputRef={register({
          required: "no password is dame",
          maxLength: { value: 10, message: "too long" },
        })}
      />
      <TextField
        label="Email Address"
        name="email"
        id="email"
        error={Boolean(errors.email)}
        helperText={errors.email ? errors.email.message : "input your email"}
        inputRef={register({
          required: "no email is dame",
          maxLength: { value: 10, message: "too long" },
        })}
      />
      <InputArea
        label="Email Address"
        name="secemail"
        id="secemail"
        error={Boolean(errors.secemail)}
        helperText={
          errors.secemail ? errors.secemail.message : "input your email"
        }
        inputRef={register({
          required: "no sec-email is dame",
          maxLength: { value: 10, message: "too long" },
        })}
      ></InputArea>
      <SelectArea defaultValue="">
        <option value="">None</option>
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </SelectArea>
      <GuiButton type="submit">Submit</GuiButton>
    </form>
  );
};

export default Demo;
