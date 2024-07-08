import { CustomAxios } from "@/utils/customAxios";

export async function getPackagesHolding() {
  try {
    const res = await CustomAxios.get(`/packages/holding`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getPackagesDetail(package_id: string) {
  try {
    const res = await CustomAxios.get(`/packages/${package_id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const createPackage = async (values: any) => {
  try {
    const response = await CustomAxios.post(`/packages/create`, values);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
