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

       

      <div class="flex-parent-element">
        <div class="flex-child-element magenta">Flex Column 1</div>
        <div class="flex-child-element green">Flex Column 2</div>
      </div>

    <div class = "column" align="center">
              <p>
                <img src = {"https://i.imgur.com/0PxXsyO.png"} width = "60" height = "40" alt = "Meta" />
                <span> Meta Quest Developer Hub</span>
              </p>

              <p>
                <img src = {"https://i.imgur.com/aXnDfLc.png"} width = "40" height = "40" alt = "Unity" />
                <span> Unity</span>
              </p>

              <p>
                <img src = {"https://i.imgur.com/hVyuGT6.png"} width = "40" height = "40" alt = "VSCode" />
                <span> Visual Studio Code</span>
              </p>

              <p>
                <img src = {"https://i.imgur.com/ZBE9YDe.png"} width = "50" height = "50" alt = "React" />
                <span> React</span>
              </p>

              <p>
                <img src = {"https://i.imgur.com/zQC1wUg.png"} width = "75" height = "50" alt = "AWS" />
                <span> Amazon Web Services</span>
              </p>

              <p>
                <img src = {"https://i.imgur.com/HJdzJWT.png"} width = "40" height = "40" alt = "Maya" />
                <span> Autodesk Maya</span>
              </p> 

              <p>
                <img src = {"https://i.imgur.com/BR1xOjZ.png"} width = "75" height = "50" alt = "MySQL" />
                <span> MySQL</span>
              </p>

              <p>
                <img src = {"https://i.imgur.com/Fg5M6LF.png"} width = "50" height = "50" alt = "Adobe Audition" />
                <span> Adobe Audition</span>
              </p> 

              <p>  
                <img src = {"https://i.imgur.com/6EWSJ38.pngg"} width = "50" height = "50" alt = "Adobe Mixamo" />
                <span> Adobe Mixamo</span>
              </p>

              <p>
                <img src = {"https://i.imgur.com/bL7y7oO.png"} width = "50" height = "50" alt = "GitHub" /> 
                <span> Github</span>
              </p> 

              <p>  
                <img src = {"https://i.imgur.com/QwquTqZ.png"} width = "50" height = "50" alt = "Jira" />
                <span> Jira</span>
              </p>
    </div>
        
            

    <div className="content__body">
          <p id="page-description">
            <span>
             With languages: 
            </span>
          </p>
    </div>


    <p align="center">
        <div class="column">
          <img src = {"https://i.imgur.com/8SCfipV.png"} width = "50" height = "50" alt = "C#" />
          <span>C#</span>

          <img src = {"https://i.imgur.com/ZOo1OTl.png"} width = "50" height = "50" alt = "C#" />
          <span>CSS</span>

          <img src = {"https://i.imgur.com/HHdwP9v.png"} width = "50" height = "50" alt = "C#" />
          <span>JavaScript</span>

          <img src = {"https://i.imgur.com/Lgbw1Fr.png"} width = "50" height = "50" alt = "C#" />
          <span>HTML</span>
        
          <img src = {"https://i.imgur.com/8h6natt.png"} width = "75" height = "50" alt = "C#" />
          <span>PHP</span>
        </div>
    </p>

      </div>
    </PageLayout>
  );
};
