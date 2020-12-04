import React from "react";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
// import { renderRoutes } from "react-router-config";
import renderRoutes from "@/utils/routerConfig";
import { routes } from "@/router/routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "@/styles/site.js";
import stores from "./store/stores";
import "@/styles/index.scss";

// const authed = false;
const authed = false; // 可以利用mobx修改登录状态
const authPath = "/demo"; // 默认未登录时,返回的页面

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider {...stores}>
        <BrowserRouter>{renderRoutes(routes, authed, authPath)}</BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
