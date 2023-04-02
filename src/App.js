import React, { lazy, Suspense, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Carousals from "./components/Caraosals";
import NewNav from "./components/NewNav";
import Body from "./components/Body";
// import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import EatZillaForm from "./components/EatZillaForm";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import userContext from "./Context/userContext";
import store from "./utils/Store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const Offers = lazy(() => import("./components/Offers"));
const Help = lazy(() => import("./components/Help"));

const App = () => {
  const [user, setUser] = useState({
    name: "Parvez",
    age: 23,
    email: "parvezmullani538@gmail.com",
  });

  return (
    <Provider store={store}>
      <userContext.Provider value={{ user, setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: (
          <>
            <Carousals />
            <NewNav />
            <Body />
          </>
        ),
      },
      {
        path: "/form",
        element: (
          <>
            <EatZillaForm />
          </>
        ),
      },
      {
        path: "/offers",
        element: (
          <Suspense>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/Help",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path:"/Cart",
        element:<Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
