import cn from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import { NavLink } from "react-router-dom";
import { IconHome, IconUsers } from "./icons";

const MENU_ITEMS = [
  { to: "/", label: "Dashboard", icon: IconHome },
  { to: "/users", label: "Users", icon: IconUsers },
];

export function Sidebar({ className }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "flex h-screen flex-col border-e bg-slate-600 text-white fixed",
        className,
      )}
    >
      <div className="px-2 md:px-4 h-16 flex items-center">
        <span className="flex h-10 w-32 items-center justify-center rounded-lg bg-gray-100 text-xl text-gray-600">
          🌤️ <span className="text-sm ml-1 max-md:hidden">Logo</span>
        </span>
      </div>

      <div className="px-2 md:px-4 py-6">
        <ul className="space-y-1">
          {MENU_ITEMS.map(({ label, icon: Icon, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  cn(
                    "group relative flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-800",
                    {
                      "bg-slate-800": isActive,
                    },
                  )
                }
              >
                {Icon && <Icon className="size-4" />}
                <span className="hidden md:inline ml-2">{label}</span>
                <span className="md:hidden invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
