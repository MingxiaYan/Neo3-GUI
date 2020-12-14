import React from "react";
import message from "@/components/others/message";

const Copy = (props) => {
  const { msg } = props;
  const clickCopy = () => {
    if (msg !== "") {
      //虚拟dom节点
      const ele = document.createElement("textarea");
      ele.value = msg;
      ele.style.opacity = "0";
      document.body.appendChild(ele);
      ele.select();
      var success = document.execCommand("copy");
      //   if (success) {
      //     alert("复制成功！");
      //   } else {
      //     alert("复制失败，请手动复制！");
      //   }
      message.info("11111");
      document.body.removeChild(ele);
    } else {
      //   alert("没有内容");
    }
  };
  return (
    <a className="clipboard" onClick={clickCopy}>
      @
    </a>
  );
};

export { Copy };
