import React, { useEffect, useState } from "react";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";

export const PublicPage = () => {
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

  //https://i.imgur.com/8bJY5e4.png
  return (
    <PageLayout>
        <Helmet>
          <title>Resources Page</title>
        </Helmet>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Resources
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              Our team's work and resources relating to the Nursing Virtual Reality Project!
            </span>
          </p>
        </div>

        <p>
          <br></br>
          <hr></hr>
          <br></br>
        </p>

        <div>
        <img src={"https:i.imgur.com/8bJY5e4.png"} alt="Nursing Virtual Reality Senior Design Poster" />
        </div>
      </div>
    </PageLayout>
  );
};
