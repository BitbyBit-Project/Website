import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";
import { AnteriorGradeTable, PosteriorGradeTable, LateralGradeTable } from "../components/gradesheet.js";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme( {
  typography: {
    fontSize: 25
  },
});

export const GradeSheet = () => {

  const [grades, setGrades] = useState([]);

  useEffect(() => {
    fetchGrades();
  }, []);

  const fetchGrades = async () => {
    try {
      const response = await fetch('http://localhost:3000/gradesheet');
      console.log(response);
      const data = await response.json();
      console.log(data);
      setGrades(data);
    } catch (error) {
      console.error("Error fetching grades:", error);
    }
  };
  
  return (
    <PageLayout>
        <Helmet>
          <title>Respiratory Grade Sheet</title>
        </Helmet>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Respiratory Grade Sheet
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves the grade sheet of a student from the VR Nursing application.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
        <ThemeProvider theme = {theme}>
          <AnteriorGradeTable grades={grades} />
          <br></br>
          <PosteriorGradeTable grades={grades} />
          <br></br>
          <LateralGradeTable grades={grades} />
          <br></br>
        </ThemeProvider>
        </div>
      </div>
    </PageLayout>
  );
};
