import SideNavigation from "../components/ui/SideNavigation";
import { AdminLinks } from "../mock/NavigationBarTabs";
import UsersDashboard from "../pages/UserDashboard";

function UserLayout() {
  return (
    <div>
      <div className="flex">
        <div className="">
          <SideNavigation CoreLink={AdminLinks} />
        </div>
        <div className="grow">
          <UsersDashboard />
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
