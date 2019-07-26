import Dashboard from "views/Dashboard.jsx";
import Map from "views/Map.jsx";
import Catalog from "views/Catalog.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Location",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Lucas Hiago",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/catalog",
    name: "Catalog",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-bag-16",
    component: Catalog,
    layout: "/admin"
  }
];
export default routes;
