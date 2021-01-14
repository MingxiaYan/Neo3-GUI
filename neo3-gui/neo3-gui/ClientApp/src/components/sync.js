import React from "react";
import { observer, inject } from "mobx-react";
// import { withTranslation } from "react-i18next"

// @withTranslation()
@inject("blockSyncStore")
@observer
class Sync extends React.Component {
  render() {
    const { t } = this.props;
    const { syncHeight, headerHeight } = this.props.blockSyncStore;
    console.log(this.props);
    return (
      <div className="ml3 mb0">
        {headerHeight < 0 ? (
          "- / - 连接中"
        ) : (
          <div>
            {syncHeight} / {headerHeight} {t("common.syncing")}
          </div>
        )}
        @@@
      </div>
    );
  }
}

export default Sync;
