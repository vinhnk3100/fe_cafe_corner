"use client";

import Link from "next/link";
import { useNavigation } from "@/providers/navigation-provider";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const { startLoading } = useNavigation();

  const handleClick = () => {
    startLoading();
    if (onClick) onClick();
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
} 