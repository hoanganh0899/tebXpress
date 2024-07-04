import axios from "axios";

const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySUQiOjI3NDIsIlJvbGUiOiJjdXN0b21lciIsIkFjdGl2ZVNob3BJRCI6MCwiRXhwaXJlZEF0IjoxNzIwNjAzNDA5fQ.H1ygf3Lq9nM_PSZlamBNFnlHZeXs1GxAC_DJTiGm_Jk";

export async function getPackagesHolding() {
  try {
    const res = await axios.get(
      `http://localhost:8888/v1/shipment/packages/holding`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getPackagesDetail(package_id: string) {
  try {
    const res = await axios.get(
      `http://localhost:8888/v1/shipment/packages/${package_id}`,
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
