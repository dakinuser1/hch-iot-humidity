export interface DeviceType {
  positionRowId: number;
  positionTypeRowId: string;
  positionName: string;
  positionNameEng: string | null;
  tempperatureNormal: number | null;
  tempperatureAlert: number | null;
  humidityNormal: number | null;
  humidityAlert: number | null;
  positionRemark: string | null;
  positionActive: string;
}