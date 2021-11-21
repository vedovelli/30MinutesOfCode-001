import { Link, Outlet, ReactLocation, Router, useMatch } from "react-location";
import { Users } from "./containers/Users/Users";
import { http } from "./service/api";
import { Header } from "./components/Header/Header";
import { Products } from "./containers/Products/Products";

const location = new ReactLocation();
const routes = [
  {
    path: "/",
    element: <Header>Dashboard</Header>,
  },
  {
    path: "/users",
    element: <Users />,
    loader: async () => ({
      users: await http.get("/users").then((data) => data.data.users),
    }),
    pendingElement: async () => <div>Loading...</div>,
    pendingMs: 300,
  },
  {
    path: "/products",
    element: <Products />,
  },
];

export { location, routes, Router, Link, Outlet, useMatch };
