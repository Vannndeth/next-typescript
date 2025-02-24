import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
  } from "react-icons/hi";
  import { BiBuoy } from 'react-icons/bi';
  
  export const MenuList = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: HiChartPie,
    },
    {
      name: "Setting",
      path: "/setting",
      icon: HiViewBoards,
    },
    {
      name: "Inbox",
      path: "/inbox",
      icon: HiInbox,
      label: "3",
    },
    {
      name: "Users",
      path: "/users",
      icon: HiUser,
    },
    {
      name: "Products",
      path: "/products",
      icon: HiShoppingBag,
    },
    {
      name: "Sign In",
      path: "/sign-in",
      icon: HiArrowSmRight,
    },
    {
      name: "Sign Up",
      path: "/signup",
      icon: HiTable,
    },
    {
      name: "Upgrade to Pro",
      path: "/upgrade",
      icon: HiChartPie,
    },
    {
      name: "Documentation",
      path: "/documentation",
      icon: HiViewBoards,
    },
    {
      name: "Help",
      path: "help",
      icon: BiBuoy,
    },
  ];

