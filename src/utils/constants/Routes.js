import Boomb from "../../modules/customizers/Boomb";
import Cannon from "../../modules/customizers/Cannon"
import Standard from "../../modules/customizers/Standard";
import TaDah from "../../modules/customizers/TaDah";

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
  },
  {
    path: '/ta-dah',
    exact: true,
    component: TaDah
  }
];
