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
              <strong>If you'd like to contact us, you can find our <u>emails</u> and our <u>LinkedIn</u> profiles below:</strong>
            </span>
          </p>
        </div>

        <p>
          <br></br>
          <hr></hr>
          <br></br>
        </p>

        <div style={{ margin:'-8%', padding: "10%"}} align="center">
        <p>
            <a style={{ display: 'block'}}
            href="mailto:miranda.medina.978@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/JI7P8SX.png" alt=""></img>
              miranda.medina.978@my.csun.edu
            </a>
        </p>
        
        <p>
            <a style={{ display: 'block'}}
            href="mailto:lucas.troutman.805@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/JI7P8SX.png" alt=""></img>
              lucas.troutman.805@my.csun.edu
            </a>
          </p>
          <p>
            <a style={{ display: 'block'}}
            href="mailto:gino.vitug.172@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/JI7P8SX.png" alt=""></img>
              gino.vitug.172@my.csun.edu
            </a>
          </p>
          <p>
            <a style={{ display: 'block'}}
            href="mailto:kathleen.navarro.220@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/JI7P8SX.png" alt=""></img>
              kathleen.navarro.220@my.csun.edu
            </a>
          </p>
          <p>
            <a style={{ display: 'block'}}
            href="mailto:murssal.rahmati.739@my.csun.edu"
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/JI7P8SX.png" alt=""></img>
              murssal.rahmati.739@my.csun.edu
            </a>
          </p>
        </div>


        <p>
          <br></br>
          <hr></hr>
          <br></br>
        </p>



        <div style={{ margin:'-8%', padding: "10%"}} align="center">
          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/mirandamedina978/"
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png" alt=""></img>
              Miranda Medina
            </a>
          </p>
          
          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/lucas-troutman-a645b7152/"
            target="_blank"
            rel="noreferrer"
            align="center"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png" alt=""></img>
              Lucas Troutman
            </a>
          </p>

          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/gino-vitug-07b7561b3/"
            target="_blank"
            rel="noreferrer"
            align="center"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png" alt=""></img>
              <b>Gino Vitug</b>
            </a>
          </p>

          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/klnavarro/"
            target="_blank"
            rel="noreferrer"
            align="center"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png" alt=""></img>
              <b>Kathleen Navarro</b>
            </a>
          </p>

          <p>
            <a style={{ display: 'block'}}
            href="https://www.linkedin.com/in/murssal-rahmati/"
            target="_blank"
            rel="noreferrer"
            align="center"
            className="button button--secondary"
            >
              <img style={{margin: "5px", padding: "5px"}} src= "https://i.imgur.com/8e4Gc7f.png" alt=""></img>
              <b>Murssal Rahmati</b>
            </a>
          </p>
        
          
          
    
        </div>
        
      </div>
    </PageLayout>
  );
};
