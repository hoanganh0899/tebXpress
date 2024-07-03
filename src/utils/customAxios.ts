import { useAuthStore } from "@/store/authStore";
import axios from "axios";

const { bearerToken } = useAuthStore.getState();

const CustomAxios = axios.create({
  baseURL: "http://localhost:8888/v1/shipment",
  headers: { Authorization: `Bearer ${bearerToken}` },
});

export { CustomAxios };
