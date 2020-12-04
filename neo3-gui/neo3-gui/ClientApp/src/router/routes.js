import Index from "@/pages/index";
import Demo from "@/pages/demo";
import Wallet from "@/pages/Wallet/Index";
import WalletLayout from "@/pages/Wallet/Layout";

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
        component: Wallet,
        requiresAuth: true, //登陆后跳转的页面
      },
    ],
  },
];

export { routes };
