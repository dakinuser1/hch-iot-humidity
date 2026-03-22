"use client";

import { useEffect, useState } from "react";
import { getLocations } from "@/services/location.service";
import { Location } from "@/types/location";
import { getDeviceTypes } from "@/services/deviceType.service";
import { DeviceType } from "@/types/deviceType";

export default function FilterBar({
  onFilter,
}: {
  onFilter: (filters: { location: string; deviceType: string }) => void;
}) {
  const [locations, setLocations] = useState<Location[]>([]);
  const [location, setLocation] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [loading, setLoading] = useState(false);

const [deviceTypes, setDeviceTypes] = useState<DeviceType[]>([]);
const [loadingDeviceType, setLoadingDeviceType] = useState(false);

  // 🔥 โหลด Location จาก API
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const data = await getLocations();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
  const fetchDeviceTypes = async () => {
    try {
      setLoadingDeviceType(true);
      const data = await getDeviceTypes();
      setDeviceTypes(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingDeviceType(false);
    }
  };

  fetchDeviceTypes();
}, []);

  return (
    <div
      className="
        sticky 
        top-[64px] 
        z-10 
        bg-base-100 
        border-b 
        px-4 py-3 
        shadow-sm
      "
    >
      <div className="flex flex-col lg:flex-row gap-4 items-end text-base-content">

        {/* Location */}
        <div className="form-control w-full lg:w-64">
          <label className="label">
            <span className="label-text font-semibold">
              Location
            </span>
          </label>

          <select
            className="select select-bordered"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            disabled={loading}
          >
            <option value="">
              {loading ? "Loading..." : "Select Location"}
            </option>

            {locations.map((loc, index) => (
  <option
    key={`${loc.departmentRowId}-${index}`}
    value={loc.departmentRowId.toString()}
  >
    {loc.department}  {/* {loc.floor} */}  
  </option>
))}

            
          </select>
        </div>

        {/* Device Type */}
        <div className="form-control w-full lg:w-64">
          <label className="label">
            <span className="label-text font-semibold">
              Device Type
            </span>
          </label>

          <select
  className="select select-bordered"
  value={deviceType}
  onChange={(e) => setDeviceType(e.target.value)}
  disabled={loadingDeviceType}
>
  <option value="">
    {loadingDeviceType ? "Loading..." : "Select Type"}
  </option>

  {deviceTypes.map((type, index) => (
    <option
      key={`${type.positionRowId}-${index}`}
      value={type.positionTypeRowId}
    >
      {type.positionName}
    </option>
  ))}
</select>
        </div>

        {/* Submit */}
        <div className="w-full lg:w-auto">
          <button
            className="btn btn-primary w-full lg:w-auto"
            onClick={() =>
              onFilter({
                location,
                deviceType,
              })
            }
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}