/* eslint-disable */
import { observable, action } from "mobx";

class WalletStore {
  @observable authed = false;

  @action login() {
    this.authed = true;
  }

  @action logout() {
    this.authed = false;
  }
}

export default WalletStore;
