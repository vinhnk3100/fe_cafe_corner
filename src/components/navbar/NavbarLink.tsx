"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "@/components/ui/nav-link";

interface NavbarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function NavbarLink({ href, label, icon }: NavbarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <NavLink 
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
        isActive 
          ? "bg-buttonColor text-primaryColor" 
          : "text-textPrimaryColor hover:bg-buttonColor/10"
      }`}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
} 