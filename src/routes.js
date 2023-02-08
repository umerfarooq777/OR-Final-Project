 
import Dashboard from "views/Dashboard.js";
import Introduction from "views/Introduction.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import RandomNumber from "views/RandomNumber";
import DataSource from "views/DataSource";
import QueueingSimulation from "views/queueingSimulation.js";
import Team from "views/Team";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  {
    path: "/introduction",
    name: "Introduction",
    icon: "nc-icon nc-bank",
    component: Introduction,
    layout: "/admin"
  },
  {
    path: "/queueingSimulation",
    name: "Queueing Simulation",
    icon: "nc-icon nc-preferences-circle-rotate",
    component: QueueingSimulation,
    layout: "/admin"
  },
  {
    path: "/SimulatonOfRandomNumber",
    name: "Random Number",
    icon: "nc-icon nc-atom",
    component: RandomNumber,
    layout: "/admin"
  },
  {
    path: "/dataSource",
    name: "Data Source",
    icon: "nc-icon nc-notes",
    component: DataSource,
    layout: "/admin"
  },
  {
    path: "/team",
    name: "Team Profile",
    icon: "nc-icon nc-circle-09",
    component: Team,
    layout: "/admin"
  },
  {
    path: "/UserProfile",
    name: "UserProfile Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  }
];

export default dashboardRoutes;
