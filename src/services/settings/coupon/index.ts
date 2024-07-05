import { CustomAxios } from "@/utils/customAxios";

export async function getListCoupons() {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/packages/coupons`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
