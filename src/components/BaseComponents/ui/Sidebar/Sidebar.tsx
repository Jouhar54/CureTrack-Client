"use client";
import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { HiOutlineLogout } from "react-icons/hi";
import Image from "next/image";
import LogoCureTrack from "../../../../../public/logos/Logo-CureTracK.png";
import { SidebarProps, NavLinkProps } from "@/interfaces/admin";
import { linksByRole } from "./SidebarLinks";

const Sidebar: React.FC<SidebarProps> = ({ role, onLinkClick }) => {
  const pathname = usePathname();
  const path = pathname?.split("/")[1] || "";
  const sidebarLinks = linksByRole[role];

  const NavLink: React.FC<NavLinkProps> = ({ el }) => (
    <Link
      href={el.link}
      onClick={onLinkClick}
      className={clsx(
        "w-full flex gap-2 px-3 py-2 rounded-full items-center text-white text-base transition-colors duration-200",
        path === el.link.split("/")[1]
          ? "bg-green-700 text-neutral-100"
          : "hover:bg-[#7de6502d] hover:text-[#43a16a]"
      )}
    >
      <span className="flex items-center gap-2">
        <span className="icon">{el.icon}</span>
        <span>{el.label}</span>
      </span>
    </Link>
  );

  return (
    <div className="h-full flex flex-col gap-6 p-5 bg-[#111211e8]">
      <h1 className="flex gap-1 items-center">
        <Image
          src={LogoCureTrack}
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <span className="text-2xl font-bold text-white">Cure Track</span>
      </h1>

      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>

      <div>
        <button
          onClick={onLinkClick}
          className="w-full flex gap-2 p-2 items-center text-lg text-white hover:text-[#43a16a]"
        >
          <HiOutlineLogout />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
