// components/dashboard/ChartSection.tsx

export default function ChartSection() {
  return (
    <div className="card bg-base-100 shadow-xl p-5 h-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Temperature / Humidity Trend
        </h2>

        <div className="flex gap-2">
          <button className="btn btn-xs btn-outline">24h</button>
          <button className="btn btn-xs btn-outline">7d</button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-[300px] flex items-center justify-center text-base-content/50">
        📊 Chart Placeholder
      </div>

    </div>
  );
}