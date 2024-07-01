import axios from "axios";
// ---------------------------- Student API ------------------------------------------------- //
// export async function resendEmail(email: string) {
//     try {
//       const res = await axios.post("/auth/register/resend-email/", { email });
//       return res.data;
//     } catch (error) {
//       console.log(error);
//       return error;
//     }
// }

export async function getStudents(
  offset: number,
  pageLimit: number,
  country: string
) {
  try {
    const res = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
        (country ? `&search=${country}` : "")
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
// import axios from "axios";

// // Sử dụng biến môi trường cho URL gốc của API
// const BASE_API_URL = import.meta.env.REACT_APP_BASE_API_ENDPOINT;

// export async function getStudents(
//   offset: number,
//   pageLimit: number,
//   code: string
// ) {
//   try {
//     // Sử dụng URLSearchParams để xây dựng chuỗi truy vấn
//     const params = new URLSearchParams({ offset, limit: pageLimit });
//     if (code) {
//       params.append("search", code);
//     }

//     const res = await axios.get(`${BASE_API_URL}/packages`, { params });
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching packages:", error.response || error.message);
//     return { success: false, error: error.response || error.message };
//   }
// }
