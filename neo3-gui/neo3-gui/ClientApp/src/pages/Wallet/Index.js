import React from "react";
import { GuiButton } from "@/components/common/button";
import { Dividers } from "@/components/dividers";
import { GuiGrid } from "@/components/common/grid";
import { walletStore } from "@/store/stores";
import renderRoutes from "@/utils/routerConfig";
import { observer, inject } from "mobx-react";

@observer
class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  login111 = () => {
    walletStore.login();
    this.props.history.push("/wallet/list");
  };
  logout111 = () => {
    walletStore.logout();
  };
  render() {
    return (
      // <div className="layout-container">
      //   {/* <WalletLayout /> */}
      //   <div className="layout-nav">
      //     <WalletLayout />
      //   </div>
      <div>
        {/* <Layout className="gui-container">
        <Sync /> */}

        <div className="wallet-content mt2">
          <div className="wa-link">
            {/* 设置一个显示值及返回路径
            {!this.state.showElem ? (
              <a className="back" onClick={this.getInset(-1)} key="1">
                <ArrowLeftOutlined />
              </a>
            ) : null}
            <Link className="close" to="/">
              <CloseOutlined />
            </Link> */}
          </div>
          <div className="menu-logo"></div>
          <div className="wallet-open mt1">
            <GuiButton>打开钱包文件</GuiButton>
            <GuiButton>创建钱包文件</GuiButton>

            <Dividers className="mt1">导入钱包</Dividers>

            <div className="mt5">
              <GuiGrid container spacing={3}>
                <GuiGrid item xs={4}>
                  <GuiButton className="btn-white">私钥</GuiButton>
                </GuiGrid>
                <GuiGrid item xs={4}>
                  <GuiButton className="btn-white">加密私钥</GuiButton>
                </GuiGrid>
                <GuiGrid item xs={4}>
                  <GuiButton className="btn-white">助记词</GuiButton>
                </GuiGrid>
              </GuiGrid>
            </div>

            <GuiButton onClick={this.login111}>登录 - mobx测试</GuiButton>
            <GuiButton onClick={this.logout111}>登出 - mobx测试</GuiButton>

            {/* {this.state.showElem ? (
              <div>
                <Button type="primary" onClick={this.getInset(0)}>
                  {t("wallet.open wallet file")}
                </Button>
                <Button
                  className="mt3 mb2"
                  type="primary"
                  onClick={this.getInset(1)}
                >
                  {t("wallet.create wallet file")}
                </Button>

                <Divider className="t-light">
                  {t("wallet.import wallet")}
                </Divider>
                <Row justify="space-between">
                  <Col span={6}>
                    <Button size="small" onClick={this.getInset(2)}>
                      {t("wallet.private key")}
                    </Button>
                  </Col>
                  <Col span={6} offset={3}>
                    <Button size="small" onClick={this.getInset(3)}>
                      {t("wallet.Nep2 key")}
                    </Button>
                  </Col>
                  <Col span={6} offset={3}>
                    <Button size="small" disabled>
                      {t("wallet.mnemonic")}
                    </Button>
                  </Col>
                </Row>
              </div>
            ) : null} */}
            {/* {!this.state.showElem ? <div>{this.state.children}</div> : null} */}
          </div>
        </div>
        <div className="copyright">Copyright © Neo Team 2014-2020</div>
      </div>
    );
  }
}

export default Wallet;
