"use client";

import { linksData } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <section className=" sticky top-0 left-0 hidden h-screen bg-dark-1 w-fit py-[30px] px-[20px]  flex-col gap-[20px] md:w-[300px] md:px-[30px] sm:flex">
      {linksData.map((link, key) => {
        const isActive =
          pathname === link.url || link.url.startsWith(`${link.url}/`);

        return (
          <Link
            key={key}
            href={`${link.url}`}
            className={cn(
              "flex gap-[10px] text-white-2 capitalize px-[15px] py-[20px]  rounded w-[60px] h-[60px]  justify-center text-[15px] items-center hover:bg-blue-1 hover:text-white-1 transition-all md:w-full md:justify-start",
              { "bg-blue-1 text-white-1": isActive }
            )}
          >
            <span className="text-[20px] ">{link.icon}</span>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </section>
  );
}
