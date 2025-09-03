import { Outlet } from "react-router-dom";

const AppLayout = () => (
  <div>
    {/* ...header, nav, etc... */}
    <Outlet />
    {/* ...footer... */}
  </div>
);

export default AppLayout;