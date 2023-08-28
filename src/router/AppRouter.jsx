import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { InitialPage } from "../pages/InitialPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/*" element={<InitialPage />} />
      </Routes>
    </>
  );
};
