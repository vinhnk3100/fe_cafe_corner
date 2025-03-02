"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoStarFill } from "react-icons/go";
import { signOut, useSession } from "next-auth/react";
import { MdLocalCafe } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { PiSpinnerBallDuotone } from "react-icons/pi";
import { Button } from "../ui/button";
import { Coffee } from "lucide-react";

export default function NavbarMain({
  scrollDown,
  scrollPosition,
}: {
  scrollDown: boolean;
  scrollPosition: number;
}) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: <FaHome />, active: pathname === "/" },
    { href: "/cafes", icon: <MdLocalCafe />, active: pathname === "/cafes" },
    {
      href: "/wheel-of-cafes",
      icon: <PiSpinnerBallDuotone />,
      active: pathname === "/wheel-of-cafes",
    },
  ];

  return (
    <nav
      className={`bg-primaryColor py-3 px-10 w-full flex justify-between items-center z-[99] transition-all shadow-md
      ${scrollPosition === 0 ? "relative" : "fixed top-0 left-0 right-0 backdrop-blur-md bg-opacity-90"} 
      ${scrollDown ? "opacity-0 h-0 pointer-events-none" : "opacity-100 h-[60px]"}`}
    >
      <div className="text-2xl hover:cursor-pointer w-full text-textPrimaryColor">
        <Link href="/">
          <span className="flex items-center gap-2">
            <Coffee className="w-10 h-10 text-primaryColor bg-buttonColor rounded-full p-1" />
            Cafe Corner
          </span>
        </Link>
      </div>
      <div className="hidden md:flex flex-row gap-8 items-center justify-center w-full">
        {navItems.map(({ href, icon, active }) => (
          <Link
            key={href}
            href={href}
            className={`text-3xl transition-all hover:scale-110 hover:text-buttonColor ${
              active ? "text-buttonColor" : "text-white"
            }`}
          >
            {icon}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar className="border-2 border-transparent hover:border-buttonColor transition-all">
              <AvatarImage src={session?.user.image} />
              <AvatarFallback>
                {session?.user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-primaryColor border-none shadow-lg p-3 rounded-lg">
            <Image
              alt={session?.user.name}
              src={session?.user.image}
              width={80}
              height={80}
              className="mx-auto my-2 rounded-md"
            />
            <DropdownMenuLabel className="text-lg flex items-center gap-2 text-textPrimaryColor">
              {session?.user.name}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <GoStarFill className="text-yellow-500 animate-pulse" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-700 text-white">
                    <p>Administrator</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-600" />
            <div className="flex flex-col gap-2">
              <DropdownMenuItem>
                <Link href="/profile" className="flex gap-3 text-textPrimaryColor hover:text-buttonColor">
                  <CgProfile className="text-2xl" /> Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  className="flex gap-3 w-full bg-buttonColor hover:bg-buttonHoverColor text-white"
                  onClick={() => signOut()}
                >
                  <TbLogout className="text-2xl" /> Logout
                </Button>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
