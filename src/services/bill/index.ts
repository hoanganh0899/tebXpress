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
