// components/dashboard/DeviceCard.tsx

export default function DeviceCard() {
  return (
    <div className="card bg-base-100 shadow-xl p-5 h-full">

      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold">12PHA-001</h2>
          <p className="text-xs opacity-70">
            ห้องยา ชั้น 12
          </p>
        </div>

        <span className="badge badge-success">Normal</span>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-6">

        {/* Temperature */}
        <div className="flex items-center gap-4">
          <div
            className="radial-progress text-primary"
            style={{ "--value": 70, "--size": "70px" } as React.CSSProperties}
          >
            🌡️
          </div>

          <div>
            <p className="text-sm opacity-70">Temperature</p>
            <p className="text-xl font-bold">23.5°C</p>
          </div>
        </div>

        {/* Humidity */}
        <div className="flex items-center gap-4">
          <div
            className="radial-progress text-secondary"
            style={{ "--value": 55, "--size": "70px" } as React.CSSProperties}
          >
            💧
          </div>

          <div>
            <p className="text-sm opacity-70">Humidity</p>
            <p className="text-xl font-bold">55%</p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-auto pt-6 flex justify-between items-center">
        <p className="text-xs opacity-60">
          อัปเดตล่าสุด: 17:00
        </p>

        <button className="btn btn-sm btn-primary">
          View
        </button>
      </div>
    </div>
  );
}