import Boomb from "../../modules/customizers/Boomb";
import Cannon from "../../modules/customizers/Cannon"
import Standard from "../../modules/customizers/Standard";

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
  },
  {
    path: '/standard',
    exact: true,
    component: Standard
  }
];
