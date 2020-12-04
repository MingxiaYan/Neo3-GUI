import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Layout, LayoutHead, LayoutItem } from "@/components/layoutItem";
import renderRoutes from "@/utils/routerConfig";
import "@/styles/wallet.scss";
import { observer, inject } from "mobx-react";

const authed = false; // 可以利用mobx修改登录的值
const authPath = "/wallet/index"; // 钱包界面未登录时,返回的页面

@inject("walletStore")
@observer
class WalletLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          name: "未登录 重定向",
          link: "/wallet/list",
        },
        {
          name: "wallet",
          link: "/wallet/index",
        },
        {
          name: "Inbox",
          link: "/",
        },
        {
          name: "Demo",
          link: "/demo",
        },
      ],
    };
  }
  componentWillUpdate(prevProps) {
    const locaChang =
      this.props.location.pathname !== prevProps.location.pathname;
    if (locaChang) {
      console.log("请先登录再打开其他页面，谢谢");
    }
  }
  render() {
    const { routes } = this.props.route;
    const { array } = this.state;
    const path = this.props.location.pathname;
    console.log(this.props.walletStore.authed);
    return (
      <div className="layout-container">
        <div className="layout-nav">
          <Layout>
            <LayoutHead title="钱包" icon={<InboxIcon />}></LayoutHead>
            {array.map((item, index) => (
              <LayoutItem
                className={item.link == path ? "selected" : ""}
                to={item.link}
                primary={item.name}
                key={index}
              />
            ))}
          </Layout>
        </div>
        <div className="layout-content">
          {renderRoutes(routes, authed, authPath)}
        </div>
      </div>
    );
  }
}

export default WalletLayout;
