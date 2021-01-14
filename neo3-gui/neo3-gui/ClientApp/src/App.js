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
// import neoNode from "@/neonode";

// const authed = false;
const authed = false; // 可以利用mobx修改登录状态
const authPath = "/demo"; // 默认未登录时,返回的页面

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   console.log(window.location.href);
  //   if (process.env.NODE_ENV !== "development") {
  //     neoNode.switchNode();
  //   }
  //   this.initWebSocket();
  // }

  // initWebSocket = () => {
  //   console.log("connecting");
  //   this.ws = new WebSocket("ws://127.0.0.1:8081");

  //   this.ws.onopen = () => {
  //     console.log("opened");
  //   };

  //   this.ws.onclose = (e) => {
  //     console.log("closed:", e);
  //     this.reconnectWebSocket();
  //   };

  //   this.ws.onerror = (e) => {
  //     console.log("error:", e);
  //   };

  //   this.ws.onmessage = this.processMessage;
  // };

  // reconnectWebSocket = () => {
  //   let self = this;
  //   if (self.lock) {
  //     return;
  //   }
  //   self.lock = true;
  //   setTimeout(() => {
  //     self.initWebSocket();
  //     self.lock = false;
  //   }, 3000);
  // };

  // processMessage = (message) => {
  //   var msg = JSON.parse(message.data);
  //   switch (msg.method) {
  //     case "getSyncHeight":
  //       stores.blockSyncStore.setHeight(msg.result);
  //       break;
  //     case "getWalletBalance":
  //       stores.walletStore.setAccounts(msg.result);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider {...stores}>
          <BrowserRouter>
            {renderRoutes(routes, authed, authPath)}
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
