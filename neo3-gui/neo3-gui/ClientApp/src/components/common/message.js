/**
 * 消息提示
 * @param {string} open
 * @param {string} [url] 被截取的url
 * @returns {string} 截取的val
 */

import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Notification from "rc-notification";
// import { InfoIcon, ErrorIcon, WarningIcon } from "@material-ui/icons";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";

// const Dividers = (other) => {
//   const classes = useStyles();
//   const props = { ...other };
//   return (
//     <div className={props.className + " " + classes.root}>
//       <span className={classes.text}>{props.children}</span>
//     </div>
//   );
// };

let notification = null;
Notification.newInstance({}, (n) => (notification = n));

const msg = {
  open: notice,
  config: "setMessage",
  onClose: "closeAlert",
};

// 渲染msg，定义类型弹窗
["success", "info", "warning", "error"].forEach((type) => {
  attachTypeApi(msg, type);
});

/**
 * msg-类型绑定
 * @param {string} open 默认绑定的open方法
 * @param {number} duration msg显示时间，默认为3s
 * @param {object} onClose 关闭的回调方法
 */
export function attachTypeApi(originalApi, type) {
  originalApi[type] = (content, duration, onClose) => {
    //若content及content.content存在
    if (isArgsProps(content)) {
      return originalApi.open({ ...content, type });
    }

    if (typeof duration === "function") {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({ content, duration, type, onClose });
  };
}

//判断该content是否为object类型及content.content 是否存在
function isArgsProps(content) {
  return (
    Object.prototype.toString.call(content) === "[object Object]" &&
    !!content.content
  );
}

const iconType = {
  success: <CheckCircleIcon className="green" />,
  info: <InfoIcon className="info" />,
  warning: <ErrorIcon className="warn" />,
  error: <CancelIcon className="red" />,
};

/**
 * 消息提示
 * @param {object} args content,duration,onClose,type
 * @param {string} [url] 被截取的url
 * @returns {string} 截取的val
 */
function notice(args) {
  const duration = args.duration !== undefined ? args.duration : 0.5;

  notification.notice({
    content: (
      <div className="msg-content">
        <span className="msg-icon">{iconType[args.type]}</span>
        <span>{args.content}</span>
      </div>
    ),
    duration: duration,
    onClose() {
      console.log("close msg");
    },
  });
}

export default msg;
