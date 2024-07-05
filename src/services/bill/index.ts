import { CustomAxios } from "@/utils/customAxios";
export async function getTransactions() {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/transactions`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getHoldings() {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/users`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getBillList() {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/bills/list`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const getBillDetail = async (code: string) => {
  try {
    const response = await CustomAxios.get(`/bills/${code}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch bill detail");
  }
};

export async function getBillDetails(code: string) {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/bills/${code}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getBillPackages(code: string) {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/bills/${code}/packages`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getExtraFee(code: string) {
  try {
    const res = await CustomAxios.get(
      `http://localhost:8888/v1/shipment/bills/${code}/fees`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
