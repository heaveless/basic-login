import { lazy } from "react-router-guard";

import authGuard from "../common/guards/auth";

export default [
  {
    path: "/auth",
    component: lazy(() => import("../layouts/blank")),
    routes: [
      {
        path: "/",
        component: lazy(() => import("../pages/login")),
      },
    ],
  },
  {
    path: "/",
    component: lazy(() => import("../layouts/theme")),
    canActivate: [authGuard],
    routes: [
      {
        path: "/",
        component: lazy(() => import("../pages/home")),
      },
    ],
  },
];
