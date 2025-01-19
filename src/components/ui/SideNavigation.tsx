import { Link } from "react-router-dom";
import { RiSettings3Fill } from "react-icons/ri";

interface SidebarNavigation {
  CoreLink: any[];
}

function SideNavigation({ CoreLink }: SidebarNavigation) {
  return (
    <>
      <div className="shadow-l sticky top-0 flex h-screen w-16 flex-col border p-2 shadow-blue-400 md:w-60">
        <div className="hidden p-4 sm:block">
          <div className="text-xl font-bold capitalize md:text-3xl">
            <Link to="/">GeoConnect</Link>
          </div>
          <p className="text-lg font-semibold md:text-2xl">Connect people</p>
          <hr className="my-2 md:my-4" />
        </div>
        <div className="scrollbar ml-1 mt-2 overflow-y-auto whitespace-nowrap border-l md:ml-2">
          {CoreLink.map((ele, index) => {
            return (
              <div key={index} className="border-black pt-2 hover:border-l-2">
                <Link to={ele.link} className="">
                  <div className="mt-2 flex items-center space-x-1 px-2 md:px-4">
                    <div>{ele.Icons}</div>
                    <div className="hidden md:block">{ele.title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="ml-1 mt-2 border-l md:ml-2"></div>
        <div className="mt-4 grow"></div>
      </div>
    </>
  );
}

export default SideNavigation;
