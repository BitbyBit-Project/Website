import React, { useEffect, useState } from "react";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";

export const ContactPage = () => {
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
          <title>Contact Us</title>
        </Helmet>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Contact Us
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              <strong>If you'd like to contact us, you can find our <u>LinkedIn</u> profiles below:</strong>
            </span>
          </p>
        </div>

        <div style={{ margin:'-8%', padding: "10%"}} align="center">
          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/mirandamedina978/"
            target="_blank"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png"></img>
              Miranda Medina
            </a>
          </p>

          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/lucas-troutman-a645b7152/"
            target="_blank"
            align="center"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png"></img>
              Lucas Troutman
            </a>
          </p>

          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/gino-vitug-07b7561b3/"
            target="_blank"
            align="center"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png"></img>
              <b>Gino Vitug</b>
            </a>
          </p>

          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/klnavarro/"
            target="_blank"
            align="center"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png"></img>
              <b>Kathleen Navarro</b>
            </a>
          </p>

          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/murssal-rahmati/"
            target="_blank"
            align="center"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png"></img>
              <b>Murssal Rahmati</b>
            </a>
          </p>
        
          
          
    
        </div>
        
      </div>
    </PageLayout>
  );
};
