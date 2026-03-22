// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import DeviceCard from "@/components/dashboard/DeviceCard";
import ChartSection from "@/components/dashboard/ChartSection";
import FilterBar from "@/components/dashboard/FilterBar";

export default function DashboardPage() {
  const [filters, setFilters] = useState({
    location: "",
    deviceType: "",
  });

  const handleFilter = (data: { location: string; deviceType: string }) => {
    console.log("FILTER:", data);
    setFilters(data);

    // 👉 ต่อ API ตรงนี้ในอนาคต
  };

  return (
    <div className="space-y-6">
      <p className="text-sm">
        Selected: {filters.location} | {filters.deviceType}
      </p>
      <FilterBar onFilter={handleFilter} />
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* 30% */}
        <div className="lg:col-span-3">
          <DeviceCard />
        </div>

        {/* 70% */}
        <div className="lg:col-span-7">
          <ChartSection />
        </div>
        {/* 30% */}
        <div className="lg:col-span-3">
          <DeviceCard />
        </div>

        {/* 70% */}
        <div className="lg:col-span-7">
          <ChartSection />
        </div>

        <div className="space-y-2">
          <div className="p-4 bg-primary text-primary-content">Primary</div>
          <div className="p-4 bg-secondary text-secondary-content">
            Secondary
          </div>
          <div className="p-4 bg-accent text-accent-content">Accent</div>
          <div className="p-4 bg-neutral text-neutral-content">Neutral</div>
          <div className="p-4 bg-base-100">Base 100</div>
          <div className="p-4 bg-base-200">Base 200</div>
          <div className="p-4 bg-base-300">Base 300</div>
          <div className="card bg-base-100 shadow-xl"></div>
          <button className="btn btn-primary">Submit</button>
          <span className="badge badge-success">Normal</span>
          <span className="badge badge-warning">Warning</span>
        </div>
      </div>
    </div>
  );
}
