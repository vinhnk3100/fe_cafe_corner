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
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GoStarFill } from "react-icons/go";
import { signOut, useSession } from "next-auth/react";
import { MdAdminPanelSettings, MdLocalCafe } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Coffee, GalleryHorizontal, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "@/providers/navigation-provider";

const NavbarMain = memo(
  ({
    scrollDown,
    scrollPosition,
  }: {
    scrollDown: boolean;
    scrollPosition: number;
  }) => {
    const { startLoading } = useNavigation();
    const { data: session, status } = useSession();
    const pathname = usePathname();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Create action to redirect to cafe creation page
    const handleCafeCreation = useCallback(() => {
      startLoading();
      router.push("/cafes/creation");
    }, [router, startLoading]);

    // Close mobile menu when pathname changes
    useEffect(() => {
      setMobileMenuOpen(false);
    }, [pathname]);

    // Close mobile menu on escape key
    useEffect(() => {
      const handleEscKey = (e: KeyboardEvent) => {
        if (e.key === "Escape" && mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener("keydown", handleEscKey);
      return () => window.removeEventListener("keydown", handleEscKey);
    }, [mobileMenuOpen]);

    const navItems = [
      { href: "/", label: "Home", icon: <FaHome />, active: pathname === "/" },
      {
        href: "/cafes",
        label: "Cafes",
        icon: <MdLocalCafe />,
        active: pathname === "/cafes",
      },
      {
        href: "/cafe-swiper",
        label: "Cafe Swiper (beta)",
        icon: <GalleryHorizontal />,
        active: pathname === "/cafe-swiper",
      },
    ];

    return (
      <div className="bg-primaryColor px-4 py-3 lg:px-10 z-[99] transition-all shadow-[0_4px_10px_rgba(26,37,43,0.6)]">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: scrollDown ? 0 : 1,
            y: scrollDown ? -200 : 0,
            display: scrollDown ? "none" : "flex",
            pointerEvents: scrollDown ? "none" : "auto",
          }}
          transition={{ duration: 0.3 }}
          className={`w-full
      ${
        scrollPosition === 0
          ? "relative"
          : "fixed top-0 left-0 right-0 backdrop-blur-md bg-primaryColor/90 p-3 ease-in-out duration-300 w-full shadow-[0_4px_10px_rgba(26,37,43,0.6)]"
      }`}
        >
          <div className="container mx-auto w-full flex justify-between items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl hover:cursor-pointer text-textPrimaryColor z-20"
              onClick={startLoading}
            >
              <motion.span
                className="flex items-center gap-1 sm:gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Coffee className="w-8 h-8 sm:w-10 sm:h-10 text-primaryColor bg-buttonColor rounded-full p-1" />
                <span className="font-bold">Cafe Corner</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-row gap-2 items-center justify-center">
              {navItems.map(({ href, icon, label, active }) => (
                <Link key={href} href={href} onClick={startLoading}>
                  <TooltipProvider>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger>
                        <motion.div
                          className={`flex items-center rounded-md transition-all px-6 xl:px-10 py-2 group ${
                            active
                              ? "text-buttonHoverTextLightColor bg-buttonColor bg-opacity-10"
                              : "text-white hover:text-buttonHoverTextLightColor hover:bg-buttonColor hover:bg-opacity-10"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                        >
                          <span className="text-2xl xl:text-3xl flex items-center justify-center h-6 group-hover:scale-110 transition-all duration-300">
                            {icon}
                          </span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="text-lg z-[100] bg-buttonColor text-white rounded-md p-2 mt-3">
                        {label}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed inset-0 top-0 right-0 z-10 w-full h-screen bg-primaryColor/95 flex flex-col items-center justify-center gap-6 p-4"
                >
                  {navItems.map(({ href, icon, label, active }) => (
                    <Link
                      key={href}
                      href={href}
                      className="w-full max-w-xs"
                      onClick={() => {
                        startLoading();
                        setMobileMenuOpen(false);
                      }}
                    >
                      <motion.div
                        className={`flex items-center gap-4 px-6 py-4 rounded-lg transition-all ${
                          active
                            ? "bg-buttonColor text-white"
                            : "text-white bg-gray-800/50"
                        }`}
                        whileHover={{ scale: 1.05, backgroundColor: "#4A5568" }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
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
            <div className="flex items-center gap-2 sm:gap-3 z-20">
              {/* Mobile Menu Button */}
              <Button
                className="lg:hidden text-white z-20 bg-buttonColor hover:bg-buttonHoverColor flex items-center p-2 h-auto"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>

              {status === "loading" ? (
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 animate-pulse"></div>
              ) : status === "authenticated" ? (
                <>
                  <Button
                    onClick={handleCafeCreation}
                    className="hidden sm:flex bg-buttonColor hover:bg-buttonHoverColor text-white font-medium text-sm md:text-md px-3 py-1 h-auto"
                  >
                    Add New Cafe
                  </Button>
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger className="focus:outline-none">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-transparent hover:border-buttonColor transition-all">
                          <AvatarImage
                            src={session?.user.image}
                            alt={session?.user.name}
                          />
                          <AvatarFallback className="bg-buttonColor text-white text-sm sm:text-base">
                            {session?.user.name?.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="bg-primaryColor border-none shadow-lg p-3 sm:p-4 rounded-lg w-56 sm:w-64 mt-2 sm:mt-4"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                          <AvatarImage
                            src={session?.user.image}
                            alt={session?.user.name}
                          />
                          <AvatarFallback className="bg-buttonColor text-white">
                            {session?.user.name?.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="overflow-hidden">
                          <DropdownMenuLabel className="text-base sm:text-lg flex items-center gap-2 text-textPrimaryColor p-0 truncate">
                            {session?.user.name}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <GoStarFill className="text-yellow-500 animate-pulse flex-shrink-0" />
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-700 text-white">
                                  <p>Administrator</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </DropdownMenuLabel>
                          <p className="text-xs sm:text-sm text-gray-400 truncate">
                            {session?.user.email}
                          </p>
                        </div>
                      </div>
                      <DropdownMenuSeparator className="bg-gray-600 my-3" />
                      <div className="flex flex-col gap-2">
                        <DropdownMenuItem className="p-0 focus:bg-transparent">
                          <Link
                            href="/profile"
                            className="flex items-center gap-3 text-textPrimaryColor hover:text-buttonColor p-2 w-full rounded-md hover:bg-gray-800 transition-all"
                            onClick={startLoading}
                          >
                            <CgProfile className="text-xl flex-shrink-0" />{" "}
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        {session?.user.role === "admin" && (
                          <DropdownMenuItem className="p-0 focus:bg-transparent">
                            <Link
                              href="/manage"
                              className="flex items-center gap-3 text-textPrimaryColor hover:text-buttonColor p-2 w-full rounded-md hover:bg-gray-800 transition-all"
                              onClick={startLoading}
                            >
                              <MdAdminPanelSettings className="text-xl flex-shrink-0" />{" "}
                              Manage
                            </Link>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="p-0 focus:bg-transparent sm:hidden">
                          <Button
                            onClick={handleCafeCreation}
                            className="flex items-center justify-center gap-3 w-full bg-buttonColor hover:bg-buttonHoverColor text-white mt-1"
                          >
                            <MdLocalCafe className="text-xl flex-shrink-0" />{" "}
                            Add New Cafe
                          </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="p-0 focus:bg-transparent">
                          <Button
                            className="flex items-center justify-center gap-3 w-full bg-buttonColor hover:bg-buttonHoverColor text-white mt-1"
                            onClick={() => signOut()}
                          >
                            <TbLogout className="text-xl flex-shrink-0" />{" "}
                            Logout
                          </Button>
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <Link href="/login" onClick={startLoading}>
                  <Button className="bg-transparent hover:bg-transparent outline-none shadow-none hover:text-buttonHoverTextLightColor text-buttonColor text-sm sm:text-md font-medium">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </motion.nav>
      </div>
    );
  }
);

NavbarMain.displayName = "NavbarMain";

export default NavbarMain;
