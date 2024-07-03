import { CustomAxios } from "@/utils/customAxios";
import { handleAxiosError } from "@/utils/handleAxiosError";

const login = async (
  email: string,
  password: string,
  recaptchaToken: string
) => {
  try {
    const { data } = await CustomAxios.post("/auth/sign-in", {
      email,
      password,
      recaptchaToken,
    });

    return data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

const update = async (idUser: number, userValue: Record<string, string>) => {
  try {
    const { data } = await CustomAxios.patch(`users/${idUser}`, {
      ...userValue,
    });

    return data;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const userService = {
  update,
  login,
};
