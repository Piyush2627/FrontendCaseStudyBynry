import {
  PiBookBold,
  PiChartLineBold,
  PiChatBold,
  PiCodeBlockBold,
  PiLockBold,
  PiUserCircleBold,
} from "react-icons/pi";

export const AdminLinks = [
  {
    Icons: <PiBookBold className="size-7 md:size-8" />,
    title: "Dashboard",
    link: "/Dashboard",
  },
  {
    Icons: <PiCodeBlockBold className="size-7 md:size-8" />,
    title: "Users Location",
    link: "/location",
  },
];
