import Boomb from "../../modules/customizers/Boomb";
import Cannon from "../../modules/customizers/Cannon"

export const routes = [
  {
    path: "/",
    exact: true,
    component: Boomb,
  },
  {
    path: '/cannon',
    exact: true,
    component: Cannon
  }
];
