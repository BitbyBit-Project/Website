import React, { useEffect, useState } from "react";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";

export const CardioSetupPage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const { data, error } = await getPublicResource();

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
          <title>CardioSetupPage</title>
        </Helmet>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
        CardioSetupPage
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              <strong>If you'd like to contact us, you can find our <u>emails</u> and our <u>LinkedIn</u> profiles below:</strong>
            </span>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};
