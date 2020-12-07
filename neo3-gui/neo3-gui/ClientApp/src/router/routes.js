import Index from "@/pages/index";
import Demo from "@/pages/demo";
import Wallet from "@/pages/Wallet/Index";
import WalletLayout from "@/pages/Wallet/Layout";
import WalletList from "@/pages/Wallet/List";
import AddressDetail from "@/pages/Wallet/AddressDetail";

import Transaction from "@/pages/Wallet/Transaction";
import TransDetail from "@/pages/Wallet/TransDetail";
import Transfer from "@/pages/Wallet/Transfer";

// import NotFound from "@/pages/Wallet/List";

const routes = [
  {
    path: "/",
    component: Index,
    exact: true,
  },
  {
    path: "/chain",
    component: Wallet,
    requiresAuth: true,
  },
  {
    path: "/demo",
    component: Demo,
  },
  {
    path: "/wallet",
    component: WalletLayout,
    routes: [
      {
        path: "/wallet/index",
        component: Wallet,
      },
      {
        path: "/wallet/list",
        component: WalletList,
        exact: true,
        requiresAuth: true, //登陆后跳转的页面
      },
      {
        path: "/wallet/list/:address",
        component: AddressDetail,
        exact: true,
        requiresAuth: true,
      },
      {
        path: "/wallet/transaction",
        component: Transaction,
        exact: true,
        requiresAuth: true,
      },
      {
        path: "/wallet/transaction/:hash",
        component: TransDetail,
        requiresAuth: true,
      },
      {
        path: "/wallet/transfer",
        component: Transfer,
        requiresAuth: true,
      },
    ],
  },
  // {
  //   path: "*",
  //   component: NotFound,
  // },
];

export { routes };
