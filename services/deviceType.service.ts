import { DeviceType } from "@/types/deviceType";

const API_URL = "http://hch-webapi.hc-hospital.com:5000/api/PositionTypeAll";

export async function getDeviceTypes(): Promise<DeviceType[]> {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch device types");
    }

    const data: DeviceType[] = await res.json();

    // 🔥 clean + filter active
    return data
      .filter((item) => item.positionActive === "Y")
      .map((item) => ({
        ...item,
        positionName: (item.positionName || "").trim(),
      }));

  } catch (error) {
    console.error("Error fetching device types:", error);
    return [];
  }
}