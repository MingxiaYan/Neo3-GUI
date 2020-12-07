import React from "react";
import { GuiButton } from "@/components/others/button";
import { Dividers } from "@/components/dividers";
import { GuiGrid } from "@/components/others/grid";
import { walletStore } from "@/store/stores";
import { TitleBar } from "@/components/others/titleBar";
import { ListHead, AddressList } from "@/components/wallet/list";

class WalletList extends React.Component {
  login() {
    walletStore.login(true);
  }
  logout() {
    walletStore.logout(true);
  }
  render() {
    return (
      <div>
        <GuiGrid container spacing={2}>
          <GuiGrid item xs={7}>
            <div className="gui-detail">
              <TitleBar>账户列表</TitleBar>
              <ListHead className="text-l">基础账户</ListHead>
              <AddressList array={[1, 2, 3, 4]} path={this.props.match.url} />
              <ListHead className="text-l">多方签名</ListHead>
              <AddressList array={[1, 2, 3, 4]} path={this.props.match.url} />
            </div>
          </GuiGrid>
          <GuiGrid item xs={5}>
            <div className="gui-detail">
              <GuiButton className="btn-white">
                提取 32.7947394849 GAS
              </GuiButton>
            </div>
          </GuiGrid>
        </GuiGrid>
        <div className="copyright">Copyright © Neo Team 2014-2020</div>
      </div>
    );
  }
}

export default WalletList;
