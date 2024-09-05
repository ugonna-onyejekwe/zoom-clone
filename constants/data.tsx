import { BiHomeAlt } from "react-icons/bi";
import { LuCalendarClock, LuGalleryVerticalEnd } from "react-icons/lu";
import { PiRecordFill } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";

export const linksData = [
  {
    name: "home",
    url: "/",
    icon: <BiHomeAlt />,
  },
  {
    name: "upcoming",
    url: "/upcoming",
    icon: <LuGalleryVerticalEnd />,
  },
  {
    name: "previous",
    url: "/previous",
    icon: <LuCalendarClock />,
  },
  {
    name: "recordings",
    url: "/recording",
    icon: <PiRecordFill />,
  },
  {
    name: "personal room",
    url: "/personal-room",
    icon: <RxPerson />,
  },
];
