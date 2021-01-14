import React from "react";
import { GuiButton } from "@/components/common/button";
import { Dividers } from "@/components/dividers";
import { GuiGrid } from "@/components/common/grid";
import { walletStore } from "@/store/stores";
import { Copy } from "@/components/copy";
import { TransList, TransItem } from "@/components/transaction/list";
import { TitleBar, TitleTabs } from "@/components/common/titleBar";
import { Layout, LayoutHead, LayoutItem } from "@/components/layoutItem";
import "@/styles/transaction.scss";

class Transaction extends React.Component {
  render() {
    return (
      <div className="container">
        <TitleTabs></TitleTabs>

        <TransList
          className="trans-list"
          header={
            <div>
              Header<span className="float-r">12333</span>
            </div>
          }
          footer={<div>Footer</div>}
          dataSource={[{ wallet: "1" }, { wallet: "2" }]}
          renderItem={(item, index) => (
            <TransItem key={index}>
              <div className="item-left">
                <a className="list-title" href="/">
                  wwwwwww
                  <Copy msg="wwwwwww" />
                </a>
                <div className="trans-detail">assdd-&gt;aaaa</div>
              </div>
              <div className="item-right">
                data
                <br />
                1658 GAS
              </div>
            </TransItem>
          )}
        />
      </div>
    );
  }
}

export default Transaction;
