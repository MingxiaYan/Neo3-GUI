/* eslint-disable */
import { observable, action } from "mobx";

class WalletStore {
  @observable authed = true;

  @action login() {
    this.authed = true;
  }

  @action logout() {
    this.authed = false;
  }
}

export default WalletStore;
