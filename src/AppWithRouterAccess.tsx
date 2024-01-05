


import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import {routes} from "./routes"
import Main from "./layouts/Main";

const router = createBrowserRouter(routes);

export const AppWithRouterAccess = () => {
  return <>
    <Main>
      <RouterProvider router={router} />
    </Main>
  </>
};
