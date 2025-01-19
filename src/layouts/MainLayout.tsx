//icons
//components
import SideNavigation from "../components/ui/SideNavigation";
//mock data
import { DocsLinks } from "../mock/NavigationBarTabs";
import UserDashboard from "../pages/UserDashboard";

function MainLayout() {
  return (
    <div className="flex">
      <div className="">
        <SideNavigation CoreLink={DocsLinks} />
      </div>
      <div className="grow">
        <UserDashboard />
      </div>
    </div>
  );
}

export default MainLayout;
