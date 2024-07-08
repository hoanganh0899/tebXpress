import { CustomAxios } from "@/utils/customAxios";

export async function getListServices() {
  try {
    const res = await CustomAxios.get(`/services`);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
