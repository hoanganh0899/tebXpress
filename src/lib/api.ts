// import axios from "axios";
// // ---------------------------- Student API ------------------------------------------------- //
// // export async function resendEmail(email: string) {
// //     try {
// //       const res = await axios.post("/auth/register/resend-email/", { email });
// //       return res.data;
// //     } catch (error) {
// //       console.log(error);
// //       return error;
// //     }
// // }

// export async function getStudents(
//   offset: number,
//   pageLimit: number,
//   country: string
// ) {
//   try {
//     const res = await axios.get(
//       `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
//         (country ? `&search=${country}` : "")
//     );
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }
import axios from "axios";
export async function getListPackages(
  offset: number,
  pageLimit: number,
  code: string
) {
  try {
    const res = await axios.get(
      `http://localhost:8888/v1/shipment/packages?offset=${offset}&limit=${pageLimit}` +
        (code ? `&search=${code}` : ""),
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
