//icons
//components
import SideNavigation from "../components/ui/SideNavigation";
//mock data
import { AdminLinks } from "../mock/NavigationBarTabs";
import AdminDashboard from "../pages/AdminDashboard";

function MainLayout() {
  return (
    <div className="flex">
      <div className="">
        <SideNavigation CoreLink={AdminLinks} />
      </div>
      <div className="grow">
        <AdminDashboard />
      </div>
    </div>
  );
}

export default MainLayout;
