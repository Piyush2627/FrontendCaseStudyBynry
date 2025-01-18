import { Link } from "react-router-dom";
// import { useState } from "react";
//icons
import { RiSettings3Fill } from "react-icons/ri";

interface SidebarNavigation {
  CoreLink: any[];
}
// const SidebarLinks = [
//   {
//     Icons: <MdCreateNewFolder />,
//     title: "Create",
//     link: "#",
//     subLink: [
//       { title: "Sub Create 1", link: "#" },
//       { title: "Sub Create 2", link: "#" },
//     ],
//   },
//   {
//     Icons: <FaHardDrive />,
//     title: "Drive",
//     link: "#",
//     subLink: [
//       { title: "Sub Create 1", link: "#" },
//       { title: "Sub Create 2", link: "#" },
//     ],
//   },
// ];

function SideNavigation({ CoreLink }: SidebarNavigation) {
  // const [activeSubLink, setActiveSubLink] = useState(null);
  // const handleSubLinkToggle = (index: any) => {
  //   setActiveSubLink((prev) => (prev === index ? null : index));
  // };

  return (
    <>
      <div className="sticky top-0 flex h-screen w-60 flex-col border p-4">
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
        <div className="mt-4 grow">
          {/* {SidebarLinks.map((ele, index) => (
            <div key={index}>
              <div
                className="mb-2 flex cursor-pointer items-center"
                onClick={() => handleSubLinkToggle(index)}
              >
                <div>{ele.title}</div>
              </div>

              {activeSubLink === index && ele.subLink && (
                <div className="ml-4">
                  {ele.subLink.map((subEle, subIndex) => (
                    <div
                      key={subIndex}
                      className="mb-1 flex items-center space-x-2 p-2"
                    >
                      <div>{subEle.title}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))} */}
        </div>
        <div className="flex items-center space-x-2 border-t-2 pt-2">
          <div>
            <RiSettings3Fill className="size-5" />
          </div>
          <div>Setting</div>
        </div>
      </div>
    </>
  );
}

export default SideNavigation;
