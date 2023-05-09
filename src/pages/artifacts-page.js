import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";

export const ArtifactsPage = () => {
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
          <title>Project Artifacts Page</title>
        </Helmet>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
        Project Artifacts
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              Our team's deliverables and artifacts of the Nursing Virtual Reality Project!
            </span>
          </p>
        </div>

        <p>
          <br></br>
          <hr></hr>
          <br></br>
        </p>

        <div className="content__body">
          <p>Nursing Virtual Reality Senior Design Poster</p>
          <img src={"https:i.imgur.com/8bJY5e4.png"} width="100%" height="90%" alt="Nursing Virtual Reality Senior Design Poster" />
        </div>

        <p>
          
          <hr></hr>
          <br></br>
        </p>


        <div className="content__body">
          <p id="page-description">
            <span>
            <a href="https://www.canva.com/design/DAFfxWfu-5o/giteZxVUXyHO8iZ87kooGA/view?utm_content=DAFfxWfu-5o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">Click here to check out our slideshow presentation!</a>

            </span>
          </p>
        </div>

        <p>
          <br></br>
          <hr></hr>
          <br></br>
        </p>

      </div>
    </PageLayout>
  );
};
