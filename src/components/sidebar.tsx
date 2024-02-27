import cn from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

const MENU_ITEMS = [
  { to: "/", label: "Dashboard" },
  { to: "/users", label: "Users" },
]

export function Sidebar() {
  return (
    <div className="flex h-screen flex-col border-e bg-slate-600 text-white">
      <div className="px-4 h-16 flex items-center">
        <span className="flex h-10 w-32 items-center justify-center rounded-lg bg-gray-100 text-xl text-gray-600">
          🌤️ <span className="text-sm ml-1">Logo</span>
        </span>
      </div>

      <div className="px-4 py-6">
        <ul className="space-y-1">
          {MENU_ITEMS.map((d) => (
            <li key={d.label}>
              <NavLink
                to={d.to}
                className={({ isActive }) =>
                  cn(
                    "block rounded-lg px-4 py-2 text-sm font-medium hover:bg-slate-800",
                    {
                      "bg-slate-800": isActive,
                    },
                  )
                }
              >
                {d.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
