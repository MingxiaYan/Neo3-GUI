/**
 * 消息提示
 * @param {string} open
 * @param {string} [url] 被截取的url
 * @returns {string} 截取的val
 */

let key = 1;

const api = {
  open: notice,
  config: setMessage,
  onClose: closeAlert,
};

["success", "info", "warning", "error", "loading"].forEach((type) => {
  console.log(api);
  console.log(type);
  attachTypeApi(api, type);
});

function isArgsProps(content) {
  console.log(content);
  return (
    Object.prototype.toString.call(content) === "[object Object]" &&
    !!content.content
  );
}

export function attachTypeApi(originalApi, type) {
  console.log(originalApi);
  originalApi[type] = (content, duration, onClose) => {
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

function notice(args) {
  console.log(args);
  const target = args.key || key++;
  const closePromise = new Promise((resolve) => {
    const callback = () => {
      if (typeof args.onClose === "function") {
        args.onClose();
      }
      return resolve(true);
    };
  });

  const result = () => {};
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}

function setMessage(options) {
  console.log(options);
}

function closeAlert() {
  console.log(11111);
}

// message.success(content, [duration], onClose);
// message.error(content, [duration], onClose);
// message.info(content, [duration], onClose);
// message.warning(content, [duration], onClose);
// message.warn(content, [duration], onClose); // alias of warning
// message.loading(content, [duration], onClose);

// const getInstance = () => {
//   return process.env.NODE_ENV === "test" ? messageInstance : null;
// };

export default api;
