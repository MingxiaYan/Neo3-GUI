import React from "react";
import classNames from "classnames";

let prefixCls = "gui-list";

function TransList(props) {
  const { header, dataSource, renderItem } = props;
  let classStr = classString(props);

  const items = [...dataSource].map((item, index) => {
    return renderItem(item, index);
  });

  if (dataSource)
    return (
      <div className={classStr}>
        <div className={classNames(`${prefixCls}-header`)}>{header}</div>
        <>{items}</>
      </div>
    );
}

const classString = (props) => {
  const _class = classNames(
    prefixCls,
    {
      [`${prefixCls}-border`]: props.bordered,
    },
    props.className
  );

  return _class;
};

function TransItem(props) {
  const { children } = props;
  return (
    <div className={classNames(`${prefixCls}-item`, props.className)}>
      {children}
    </div>
  );
}

export { TransList, TransItem };
