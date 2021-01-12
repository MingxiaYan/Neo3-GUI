import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Layout, LayoutHead, LayoutItem } from "@/components/layoutItem";
import renderRoutes from "@/utils/routerConfig";
import "@/styles/wallet.scss";
import { observer, inject } from "mobx-react";

// const authed = false; // 可以利用mobx修改登录的值
const authPath = "/wallet/index"; // 钱包界面未登录时,返回的页面

@inject("walletStore")
@observer
class WalletLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [
        {
          name: "wallet",
          link: "/wallet/index",
        },
        {
          name: "账户列表",
          link: "/wallet/list",
        },
        {
          name: "交易记录",
          link: "/wallet/transaction",
        },
        {
          name: "交易记录-detail",
          link: "/wallet/transaction/123",
        },
        {
          name: "转账",
          link: "/wallet/transfer",
        },
        {
          name: "Demo",
          link: "/demo",
        },
      ],
    };
  }
  look = () => {
    console.log(this.props.walletStore.authed);
  };
  componentWillUpdate(prevProps) {
    const authed = this.props.walletStore.authed;
    if (authed) {
      console.log("请先登录再打开其他页面，谢谢");
      console.log(this.props);
    }
  }
  render() {
    const { routes } = this.props.route;
    const { array } = this.state;
    const path = this.props.location.pathname;
    const authed = this.props.walletStore.authed;
    console.log(this.props.walletStore.authed);
    return (
      <div className="layout-container">
        <div className="layout-nav">
          <div className="layout-logo"></div>
          <LayoutHead title="主页" to="/" icon={<HomeIcon />}></LayoutHead>
          <Layout className="layout-content">
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
          {/* <a onClick={this.look}>查看 wallet store</a> */}

          <div className="sync">
            4,978,400 / 5,012,34 区块同步中<span>@</span>
          </div>

          {renderRoutes(routes, authed, authPath)}
        </div>
      </div>
    );
  }
}

export default WalletLayout;
