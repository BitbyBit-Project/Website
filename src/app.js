import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import { AdminPage } from "./pages/admin-page";
import { CallbackPage } from "./pages/callback-page";
import { HomePage } from "./pages/home-page";
import { NotFoundPage } from "./pages/not-found-page";
import { ProfilePage } from "./pages/profile-page";
import { ProtectedPage } from "./pages/protected-page";
import { PublicPage } from "./pages/resources-page";
import { AboutPage } from "./pages/about-page";
import { ContactPage } from "./pages/contact-page";
import { GradeSheet } from "./pages/grade-sheet";
import { createTheme } from "@mui/material";
import { CardioSetupPage } from "./pages/cardiosetup-page";
import { RespSetupPage } from "./pages/respsetup-page";

export const App = () => {
  const { isLoading } = useAuth0();


  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<AuthenticationGuard component={ProfilePage} />}/>
      <Route path="/resources" element={<PublicPage />} />
      <Route path="/protected" element={<AuthenticationGuard component={ProtectedPage} />} />
      <Route path="/gradesheet" element={<AuthenticationGuard component={GradeSheet} />} />
      <Route path="/admin" element={<AuthenticationGuard component={AdminPage} />} />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/cardiosetup" element={<AuthenticationGuard component={CardioSetupPage} />} />
      <Route path="/respsetup" element={<AuthenticationGuard component={RespSetupPage} />} />
    </Routes>
  );
};
