// components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Transactions", path: "/transactions" },
    { name: "Reports", path: "/reports" },
  ];

  return (
<div className="menu w-55 min-h-full bg-neutral text-base-content">
      <div className="p-4 text-xl font-bold">HCH IoT</div>

      <ul className="menu p-2">
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}

        <div className="divider" />

        <li>
          <Link href="/admin" className="text-warning">
            Admin 🔒
          </Link>
        </li>
      </ul>
    </div>
  );
}