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
import { GoStarFill } from "react-icons/go";
import { signOut, useSession } from "next-auth/react";
import { MdLocalCafe } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Coffee, GalleryHorizontal, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarMain({
  scrollDown,
  scrollPosition,
}: {
  scrollDown: boolean;
  scrollPosition: number;
}) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "Home", icon: <FaHome />, active: pathname === "/" },
    { href: "/cafes", label: "Cafes", icon: <MdLocalCafe />, active: pathname === "/cafes" },
    {
      href: "/cafe-swiper",
      label: "Cafe Swiper (beta)",
      icon: <GalleryHorizontal />,
      active: pathname === "/cafe-swiper",
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: scrollDown ? 0 : 1, 
        y: scrollDown ? -60 : 0,
        display: scrollDown ? "none" : "flex",
        pointerEvents: scrollDown ? "none" : "auto"
      }}
      transition={{ duration: 0.3 }}
      className={`bg-primaryColor py-3 px-4 md:px-10 w-full flex justify-between items-center z-[99] transition-all shadow-[0_4px_10px_rgba(26,37,43,0.6)]
      ${scrollPosition === 0 ? "relative" : "fixed top-0 left-0 right-0 backdrop-blur-md bg-mainNavbarColor ease-in-out duration-300"}`}
    >
      <Link href="/" className="text-2xl hover:cursor-pointer text-textPrimaryColor z-20">
        <motion.span 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Coffee className="w-10 h-10 text-primaryColor bg-buttonColor rounded-full p-1" />
          <span className="font-bold">Cafe Corner</span>
        </motion.span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row gap-8 items-center justify-center">
        {navItems.map(({ href, icon, label, active }) => (
          <Link key={href} href={href}>
            <motion.div
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
                active ? "text-buttonColor bg-buttonColor/10" : "text-white hover:text-buttonColor"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xl">{icon}</span>
              <span className="font-medium">{label}</span>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white z-20"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 top-0 right-0 z-10 w-full h-screen bg-primaryColor/95 flex flex-col items-center justify-center gap-8 p-4"
          >
            {navItems.map(({ href, icon, label, active }) => (
              <Link key={href} href={href} className="w-full max-w-xs">
                <motion.div
                  className={`flex items-center gap-4 px-6 py-4 rounded-lg transition-all ${
                    active ? "bg-buttonColor text-white" : "text-white bg-gray-800/50"
                  }`}
                  whileHover={{ scale: 1.05, backgroundColor: "#4A5568" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="text-xl font-medium">{label}</span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Profile */}
      <div className="flex items-center gap-3 z-20">
        {status === "loading" ? (
          <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
        ) : status === "authenticated" ? (
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="focus:outline-none">
              <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Avatar className="border-2 border-transparent hover:border-buttonColor transition-all">
                  <AvatarImage src={session?.user.image} alt={session?.user.name} />
                  <AvatarFallback className="bg-buttonColor text-white">
                    {session?.user.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primaryColor border-none shadow-lg p-4 rounded-lg w-64 mt-2">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={session?.user.image} alt={session?.user.name} />
                  <AvatarFallback className="bg-buttonColor text-white">
                    {session?.user.name?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <DropdownMenuLabel className="text-lg flex items-center gap-2 text-textPrimaryColor p-0">
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
                  <p className="text-sm text-gray-400">{session?.user.email}</p>
                </div>
              </div>
              <DropdownMenuSeparator className="bg-gray-600 my-3" />
              <div className="flex flex-col gap-2">
                <DropdownMenuItem className="p-0 focus:bg-transparent">
                  <Link 
                    href="/profile" 
                    className="flex items-center gap-3 text-textPrimaryColor hover:text-buttonColor p-2 w-full rounded-md hover:bg-gray-800 transition-all"
                  >
                    <CgProfile className="text-xl" /> Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0 focus:bg-transparent">
                  <Button
                    className="flex items-center justify-center gap-3 w-full bg-buttonColor hover:bg-buttonHoverColor text-white mt-2"
                    onClick={() => signOut()}
                  >
                    <TbLogout className="text-xl" /> Logout
                  </Button>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/api/auth/signin">
            <Button className="bg-buttonColor hover:bg-buttonHoverColor text-white">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </motion.nav>
  );
}
