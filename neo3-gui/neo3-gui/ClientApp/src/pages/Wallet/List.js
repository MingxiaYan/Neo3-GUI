import React from "react";
import { GuiButton } from "@/components/others/button";
import { GuiGrid } from "@/components/others/grid";
import { walletStore } from "@/store/stores";
import { TitleBar } from "@/components/others/titleBar";
import { ListHead, AddressList, AssetList } from "@/components/wallet/list";

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
            <TitleBar>账户列表</TitleBar>
            <div className="wallet-list">
              <ListHead className="text-l">基础账户</ListHead>
              <AddressList array={[1, 2, 3, 4]} path={this.props.match.url} />
              <ListHead className="text-l">多签账户</ListHead>
              <AddressList
                array={[1, 2, 3, 4, 5, 6, 7, 8]}
                path={this.props.match.url}
              />
              <ListHead className="text-l">其他账户</ListHead>
              <AddressList array={[1]} path={this.props.match.url} />
            </div>
          </GuiGrid>
          <GuiGrid item xs={5}>
            <TitleBar>资产列表</TitleBar>
            <div className="wallet-list">
              <div className="asset-list">
                <ListHead className="text-l">
                  资产<span className="float-r">余额</span>
                </ListHead>
                <AssetList
                  array={[1, 2, 3, 4, 5, 6, 7, 8]}
                  path={this.props.match.url}
                />
              </div>
              <GuiButton className="btn-white">
                提取 32.7947394849 GAS
              </GuiButton>
            </div>
          </GuiGrid>
        </GuiGrid>
      </div>
    );
  }
}

export default WalletList;
