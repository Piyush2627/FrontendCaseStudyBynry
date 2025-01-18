//icons
//components
import SideNavigation from "../components/ui/SideNavigation";
//mock data
import { ComponentsLinks } from "../mock/NavigationBarTabs";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex">
      <div className="w-60">
        <SideNavigation CoreLink={ComponentsLinks} />
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
