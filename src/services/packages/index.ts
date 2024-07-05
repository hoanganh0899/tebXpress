import { CustomAxios } from "@/utils/customAxios";

export async function getPackagesHolding() {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/packages/holding`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getPackagesDetail(package_id: string) {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/packages/${package_id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
