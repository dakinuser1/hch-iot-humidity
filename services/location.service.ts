import { Location } from "@/types/location";

const API_URL = "http://hch-webapi.hc-hospital.com:5000/api/DepInfo";

export async function getLocations(): Promise<Location[]> {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store", // ไม่ cache (เหมาะกับ realtime)
    });

    if (!res.ok) {
      throw new Error("Failed to fetch locations");
    }

    const data: Location[] = await res.json();

    // 🔥 clean data
    return data.map((item) => ({
      ...item,
       department: item.department?.trim() || "",
  floor: item.floor?.trim() || "",
    }));
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
}