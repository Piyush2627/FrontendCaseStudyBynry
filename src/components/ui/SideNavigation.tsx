import { Link } from "react-router-dom";
import { RiSettings3Fill } from "react-icons/ri";

interface SidebarNavigation {
  CoreLink: any[];
}

function SideNavigation({ CoreLink }: SidebarNavigation) {
  return (
    <>
      <div className="shadow-l sticky top-0 flex h-screen w-10 flex-col border p-4 shadow-blue-400 md:w-60">
        <div className="text-3xl font-bold capitalize">
          <Link to="/">Element</Link>
        </div>
        <p className="text-3xl font-semibold"> UI Library</p>
        <hr className="my-4" />
        <p className="text-lg"> UI Library</p>
        <div className="scrollbar ml-2 mt-2 overflow-y-scroll whitespace-nowrap border-l">
          {CoreLink.map((ele, index) => {
            return (
              <div key={index} className="border-black pt-2 hover:border-l-2">
                <Link to={ele.link} className="">
                  <div className="flex items-center space-x-1 px-4">
                    <div>{ele.Icons}</div>
                    <div> {ele.title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="ml-2 mt-2 border-l"></div>
        <div className="mt-4 grow"></div>
      </div>
    </>
  );
}

export default SideNavigation;
