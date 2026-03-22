"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  // แปลง path → breadcrumb
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="navbar bg-base-100 border-b px-4 text-base-content">
      
      {/* LEFT (Mobile menu button) */}
      <div className="flex-none lg:hidden">
        <label htmlFor="main-drawer" className="btn btn-square btn-ghost">
          ☰
        </label>
      </div>

      {/* CENTER (Breadcrumb) */}
      <div className="flex-1">
        <div className="breadcrumbs text-sm font-semibold text-base-content">
          <ul>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>

            {pathSegments.map((segment, index) => {
              const href = "/" + pathSegments.slice(0, index + 1).join("/");

              return (
                <li key={href}>
                  <Link href={href} className="capitalize">
                    {segment}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* RIGHT (Login) */}
      <div className="flex-none">
        <button className="btn btn-sm text-base-content">
          Login
        </button>
      </div>
    </div>
  );
}