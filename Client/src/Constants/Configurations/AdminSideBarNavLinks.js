import {
  Dashboard,
  People,
  InventoryOutlined,
  DeliveryDiningOutlined,
  CategoryOutlined,
} from "@mui/icons-material";
export const adminSideBarNavLinks = [
  { text: "Dashboard", image: <Dashboard />, routeUrl: "dashboard" },
  { text: "Users", image: <People />, routeUrl: "Users" },
  { text: "Products", image: <InventoryOutlined />, routeUrl: "products" },
  { text: "Orders", image: <DeliveryDiningOutlined />, routeUrl: "orders" },
  { text: "Categories", image: <CategoryOutlined />, routerUrl: "categories" }, 
];
