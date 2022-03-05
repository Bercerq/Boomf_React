import Boomb from "../../modules/customizers/Boomb";
import Cannon from "../../modules/customizers/Cannon"

export const routes = [
  {
    path: "/b",
    exact: true,
    component: Boomb,
  },
  {
    path: '/',
    exact: true,
    component: Cannon
  },
];
