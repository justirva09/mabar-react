import { Home, Profile, About } from 'pages';


const route = [
  {
    name: "Home",
    path: "/",
    component: Home,
    exact: true
  },
  {
    name: "Profile",
    path: "/profile/:id",
    component: Profile,
    exact: true
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
    exact: true
  },
  {
    name: "About",
    path: "/about",
    component: About,
    exact: true
  },
  {
    name: "404",
    path: "*",
    component: () => <h1>Error 404</h1>,
    exact: true
  }
];

export  {
  route
}