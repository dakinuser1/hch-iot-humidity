// components/layout/Container.tsx
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <div className="drawer lg:drawer-open">
      {/* toggle checkbox */}
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />

      {/* content */}
      <div className="drawer-content flex flex-col">
        <Navbar />

        <div className="p-4 bg-base-200 min-h-screen">
          {children}
        </div>
      </div>

      {/* sidebar */}
      <div className="drawer-side">
        <label htmlFor="main-drawer" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}