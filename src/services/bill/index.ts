import { CustomAxios } from "@/utils/customAxios";
import axios from "axios";
export async function getTransactions() {
  try {
    const res = await axios.get(
      `http://localhost:8888/v1/shipment/transactions`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjI3NDIsIlJvbGUiOiJjdXN0b21lciIsIkFjdGl2ZVNob3BJRCI6MCwiRXhwaXJlZEF0IjoxNzIwNjAzNDA5fQ.H1ygf3Lq9nM_PSZlamBNFnlHZeXs1GxAC_DJTiGm_Jk",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getHoldings() {
  try {
    const res = await axios.get(`http://localhost:8888/v1/shipment/users`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjI3NDIsIlJvbGUiOiJjdXN0b21lciIsIkFjdGl2ZVNob3BJRCI6MCwiRXhwaXJlZEF0IjoxNzIwNjAzNDA5fQ.H1ygf3Lq9nM_PSZlamBNFnlHZeXs1GxAC_DJTiGm_Jk",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getBillList() {
  try {
    const res = await axios.get(
      `http://localhost:8888/v1/shipment/bills/list`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjI3NDIsIlJvbGUiOiJjdXN0b21lciIsIkFjdGl2ZVNob3BJRCI6MCwiRXhwaXJlZEF0IjoxNzIwNjAzNDA5fQ.H1ygf3Lq9nM_PSZlamBNFnlHZeXs1GxAC_DJTiGm_Jk",
        },
      }
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
    const res = await axios.get(
      `http://localhost:8888/v1/shipment/bills/${code}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjI3NDIsIlJvbGUiOiJjdXN0b21lciIsIkFjdGl2ZVNob3BJRCI6MCwiRXhwaXJlZEF0IjoxNzIwNjAzNDA5fQ.H1ygf3Lq9nM_PSZlamBNFnlHZeXs1GxAC_DJTiGm_Jk",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getBillPackages(code: string) {
  try {
    const res = await axios.get(
      `http://localhost:8888/v1/shipment/bills/${code}/packages`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjI3NDIsIlJvbGUiOiJjdXN0b21lciIsIkFjdGl2ZVNob3BJRCI6MCwiRXhwaXJlZEF0IjoxNzIwNjAzNDA5fQ.H1ygf3Lq9nM_PSZlamBNFnlHZeXs1GxAC_DJTiGm_Jk",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getExtraFee(code: string) {
  try {
    const res = await axios.get(
      `http://localhost:8888/v1/shipment/bills/${code}/fees`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjI3NDIsIlJvbGUiOiJjdXN0b21lciIsIkFjdGl2ZVNob3BJRCI6MCwiRXhwaXJlZEF0IjoxNzIwNjAzNDA5fQ.H1ygf3Lq9nM_PSZlamBNFnlHZeXs1GxAC_DJTiGm_Jk",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
