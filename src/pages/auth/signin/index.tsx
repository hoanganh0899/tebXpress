import { EyeIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { userService } from "@/services/auth";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "@/routes/hooks";

const LoginPage = () => {
  const router = useRouter();
  const [shouldShowPassword, setShouldShowPassword] = useState<boolean>(false);
  const [verifyReCaptcha, setVerifyReCaptcha] = useState<string>("");
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginBtnClick = async () => {
    try {
      setIsLogin(true);
      const loginResponse = await userService.login(
        email,
        password,
        verifyReCaptcha
      );
      // console.log("login:", loginResponse);
      setIsLogin(false);
      if (!loginResponse.success || !loginResponse.data) {
        toast.error(loginResponse.message);
        return;
      }
      const { accessToken, user } = loginResponse.data;
      console.log("login:", accessToken, user);
      useAuthStore.getState().login(accessToken, user);
      router.push("/");
      // redirect();
    } catch (err) {
      toast.error("Server error");
    }
    setRefreshReCaptcha((r) => !r);
  };

  const handleReCaptchaVerify = useCallback((token: string) => {
    setVerifyReCaptcha(token);
  }, []);

  useEffect(() => {
    const authStorageItem = window.localStorage.getItem("auth-storage");
    if (authStorageItem) {
      const authData = JSON.parse(authStorageItem);
      if (authData.state.isLoggedIn) {
        router.push("/");
      }
    }
  }, [router]);

  return (
    <>
      <div className="flex h-screen flex-col md:flex-row">
        <div className="flex items-baseline justify-center p-8 m-auto">
          <div className="flex max-w-md flex-col items-center justify-center bg-white">
            <img src="../../../../tebxpress-high-resolution-logo-transparent.png" />
            <h1 className="text-center text-lg font-bold leading-6 tracking-tight text-color">
              SIGN IN
            </h1>

            <form>
              <div>
                <label className="text-sm font-bold leading-5">Email</label>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                />
              </div>
              <div className="py-6">
                <label className="text-sm font-bold leading-5">Password</label>
                <div className="relative">
                  <Input
                    type={shouldShowPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                  />
                  <EyeIcon
                    onClick={() => setShouldShowPassword((prev) => !prev)}
                    className="absolute right-0 top-0 h-[38px] w-[38px] px-2"
                  />
                </div>
                <div
                  id="tebRecaptcha"
                  className="mt-2 flex items-center justify-center md:mt-[24px] md:p-0"
                >
                  <div>
                    <GoogleReCaptchaProvider
                      reCaptchaKey={`6LcnCgcqAAAAANRLH_w08mAAVuJFW5rCQFke0nwW`}
                      container={{
                        element: "#tebRecaptcha",
                        parameters: {
                          badge: "inline",
                          theme: "light",
                        },
                      }}
                    >
                      <GoogleReCaptcha
                        onVerify={handleReCaptchaVerify}
                        refreshReCaptcha={refreshReCaptcha}
                      />
                    </GoogleReCaptchaProvider>
                  </div>
                </div>
              </div>
              <Button
                className="mt-6 h-10 w-80 border-primary bg-primary text-center text-white hover:bg-[#e2d0a9]"
                type="button"
                onClick={() => handleLoginBtnClick()}
                disabled={isLogin}
              >
                Login
              </Button>
              <p className="mt-4 text-[#D5B263]">
                <a href="/forgot-password">Forgot password?</a>
              </p>
              <div>
                <p className="mt-4 text-center">
                  New to TebPrint?
                  <span className="px-2 text-[#D5B263]">
                    <a href="/sign-up">Sign Up</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="hidden h-screen w-full items-center justify-center md:flex md:w-1/2 xl:basis-4/12">
          <img
            src="/assets/images/loginPage.png"
            alt="Login Image"
            className="h-full w-screen"
          />
        </div> */}
      </div>
      <ToastContainer />
    </>
  );
};

export { LoginPage };
