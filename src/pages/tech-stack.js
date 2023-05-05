import React, { useEffect, useState } from "react";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";

export const TechPage = () => {

  return (
    <PageLayout>
        <Helmet>
          <title>Technology Stack</title>
        </Helmet>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Technology Stack
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              A technology stack (tech stack) refers to the set of tools, programming languages, and technologies that work together to build a web or mobile application. Here is a list of the technologies used in the Nursing Virtual Reality Project!
            </span>
          </p>
        </div>

        <p>
          <br></br>
          <hr></hr>
          <br></br>
        </p>

        <div>
        </div>
      </div>
    </PageLayout>
  );
};
