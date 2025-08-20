import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import useAuthStore from "shared/store/useAuthStore";
import { jwtDecode } from "jwt-decode";


const OAuthLogin = () => {
  const {login } = useAuthStore();

  useEffect(() => {
    const token = sessionStorage.getItem('googleIdToken');
    if (token) {
      login(JSON.parse(sessionStorage.getItem('user')));
    }
  }, []);

  const handleSuccess = (response) => {
    const { credential } = response;
    if (!credential) {
      console.error("OAuth Error : No credential received from Google");
      return;
    }
    sessionStorage.setItem('googleIdToken', credential);
    try {
      const user = jwtDecode(credential);
      sessionStorage.setItem("user", JSON.stringify(user));
      login(user);
      console.log("User logged in successfully", user);
    } catch (error) {
      console.error("OAuth Error", error);
    }
  };

  const handleFailure = (error) => {
    console.error("OAuth Error", error);
  };


  return (
    <>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
    </>
  );
};

export default OAuthLogin;