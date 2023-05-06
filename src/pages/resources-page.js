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
        <img src={"https:i.imgur.com/8bJY5e4.png"} width="1103" 
     height="1500" alt="Nursing Virtual Reality Senior Design Poster" />
        </div>

        <p>
          <br></br>
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

        <div className="content__body">
          <p id="page-description">
            <span>
             Nursing Virtual Reality powered by: 
            </span>
          </p>
        </div>

       

            <div class="column">

              <img src = {"https://i.imgur.com/hVyuGT6.png"} width = "40" height = "40" alt = "VSCode" />
              <span>Visual Studio Code    </span>
            
              <img src = {"https://i.imgur.com/aXnDfLc.png"} width = "40" height = "40" alt = "Unity" />
              <span>Unity   </span>

              <img src = {"https://i.imgur.com/ZBE9YDe.png"} width = "50" height = "50" alt = "React" />
              <span>React   </span>

              <img src = {"https://i.imgur.com/zQC1wUg.png"} width = "75" height = "50" alt = "AWS" />
              <span>Amazon Web Services   </span>

              <img src = {"https://i.imgur.com/HJdzJWT.png"} width = "40" height = "40" alt = "Maya" />
              <span>Autodesk Maya   </span>

              <img src = {"https://i.imgur.com/BR1xOjZ.png"} width = "75" height = "50" alt = "MySQL" />
              <span>MySQL   </span>

              <img src = {"https://i.imgur.com/Fg5M6LF.png"} width = "50" height = "50" alt = "Adobe Audition" />
              <span>Adobe Audition    </span>

              <img src = {"https://i.imgur.com/6EWSJ38.pngg"} width = "50" height = "50" alt = "Adobe Mixamo" />
              <span>Adobe Mixamo    </span>

              <img src = {"https://i.imgur.com/bL7y7oO.png"} width = "50" height = "50" alt = "GitHub" /> 
              <span>Github    </span>

              <img src = {"https://i.imgur.com/QwquTqZ.png"} width = "50" height = "50" alt = "Jira" />
              <span>Jira    </span>

             





            </div>

            

        

      </div>
    </PageLayout>
  );
};
