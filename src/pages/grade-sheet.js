import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { getProtectedResource } from "../services/message.service";
import AnteriorGradeTable, { PosteriorGradeTable, LateralGradeTable } from "../components/gradesheet.js";
import { ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material";
import { Helmet } from "react-helmet";

const theme = createTheme( {
  typography: {
    fontSize: 25
  },
});

export const GradeSheet = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getProtectedResource();

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <PageLayout>
        <Helmet>
          <title>Student Grade Sheet</title>
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
          <AnteriorGradeTable />
          <br></br>
          <PosteriorGradeTable />
          <br></br>
          <LateralGradeTable />
        </ThemeProvider>
        </div>
      </div>
    </PageLayout>
  );
};
