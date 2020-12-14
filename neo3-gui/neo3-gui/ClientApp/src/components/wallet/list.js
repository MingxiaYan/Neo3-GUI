import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Copy } from "@/components/copy";
import { GuiAvantar } from "@/components/others/avantar";

const useStyles = makeStyles({
  root: {},
  list: {
    color: "#000",
  },
  text: {
    paddingLeft: "51px",
  },
});

function ListHead(props) {
  const { path, array } = props;
  const classes = useStyles();
  console.log(props);

  return <div className="list-head">{props.children}</div>;
}
function AddressList(props) {
  const { path, array } = props;
  const classes = useStyles();

  return (
    <ul className="gui-list">
      {array.map((item, index) => (
        <li key={index}>
          <div>
            <Link
              className="list-title"
              to={path + "/AaxQymedATYpa7xbsyZhqMyrc25s3Y45pr"}
            >
              AaxQymedATYpa7xbsyZhqMyrc25s3Y45pr
            </Link>
            <Copy msg={"需要复制的地址"} />
          </div>
          <span className="list-hint">NEO 1,390</span>
          <span className="list-hint">GAS 1,390</span>
        </li>
      ))}
    </ul>
  );
}

function AssetList(props) {
  const { path, array } = props;
  const classes = useStyles();

  return (
    <ul className="gui-list">
      {array.map((item, index) => (
        <li key={index}>
          <div>
            {/* <Link
              className="list-title"
              to={path + "/AaxQymedATYpa7xbsyZhqMyrc25s3Y45pr"}
            >
              AaxQymedATYpa7xbsyZhqMyrc25s3Y45pr
            </Link> */}
            <GuiAvantar></GuiAvantar>
            <Copy msg={"需要复制的地址"} />
          </div>
          <span className="list-hint">NEO 1,390</span>
          <span className="list-hint">GAS 1,390</span>
        </li>
      ))}
    </ul>
  );
}

function TokenList(props) {
  const { head, route } = props.array;
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {head ? (
        <li className={classes.head}>
          <span className={classes.icon}>{head.icon}</span>
          {head.name}
        </li>
      ) : null}
      {route.map((item, index) => (
        <li key={index}>
          <Link className={classes.text} to={item.link}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { ListHead, AddressList, AssetList, TokenList };
