import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import { AppLayout } from "./layout";
import { Nivo, Recharts } from "./pages";
  
  function Routes() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route>
          <Route path="/" element={<AppLayout />}>
            <Route path="/nivo" element={<Nivo />} />
            <Route index element={<Recharts />} />
            <Route path="*" element={<Recharts />} />
          </Route>
        </Route>
      )
    );
  
    return <RouterProvider router={router} />;
  }
  
  export default Routes;