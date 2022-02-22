import Boomb from "../../modules/customizers/Boomb";
import Cannon from "../../modules/customizers/Cannon"
import Test from "../../modules/customizers/Test";

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
    path: '/test',
    exact: true,
    component: Test,
  }
];
