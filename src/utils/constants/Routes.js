import Boomb from "../../modules/customizers/Boomb";
import Cannon from "../../modules/customizers/Cannon";
import MallowPops from "../../modules/customizers/MallowPops";
import Standard from "../../modules/customizers/Standard";
import Flutter from "../../modules/customizers/Flutter";
import TaDah from "../../modules/customizers/TaDah/TaDah";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Boomb,
  },
  {
    path: "/cannon",
    exact: true,
    component: Cannon,
  },
  {
    path: "/standard",
    exact: true,
    component: Standard,
  },
  {
    path: "/ta-dah",
    exact: true,
    component: TaDah,
  },
  {
    path: "/Mallow-pops",
    exact: true,
    component: MallowPops,
  },
  {
    path: "/flutter",
    exact: true,
    component: Flutter
  }
];
