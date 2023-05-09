import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
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

        <p>
          <br></br>
          <hr></hr>
          <br></br>
        </p>

        <div className="content__body">
          <p id="page-description">
            <span>
              A technology stack (tech stack) refers to the set of tools, programming languages, and technologies that work together to build a software application. Here is a list of the technologies used in the Nursing Virtual Reality Project!
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
             
            </span>
          </p>
        </div>

        <p>
          <br></br>
          <br></br>
        </p>
       

        <div class = "column" align="center">
      <div class="flex-parent-element">
        
        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/0PxXsyO.png"} width = "60" height = "40" alt = "Meta" />
          <p><span> Meta Quest Developer Hub</span></p>
        </div>

        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/aXnDfLc.png"} width = "45" height = "45" alt = "Unity" />
          <p> <span> Unity</span></p>
        </div>

        <div class="flex-child-element magenta">
         <img src = {"https://i.imgur.com/hVyuGT6.png"} width = "40" height = "40" alt = "VSCode" />
         <p><span> Visual Studio Code</span></p>
        </div>

        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/zQC1wUg.png"} width = "60" height = "40" alt = "AWS" />
          <p><span> Amazon Web Services</span></p>
        </div>

        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/BR1xOjZ.png"} width = "70" height = "45" alt = "MySQL" />
         <p> <span> MySQL</span></p>
        </div>

        <div class="flex-child-element magenta">
         <img src = {"https://i.imgur.com/ZBE9YDe.png"} width = "50" height = "50" alt = "React" />
         <p> <span> React</span></p>
        </div>
        
        </div>
        </div>

        
    <div class = "column" align="center">
      <div class="flex-parent-element">
        
        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/HJdzJWT.png"} width = "48" height = "48" alt = "Maya" />
         <p><span> Autodesk Maya</span></p>
        </div>

        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/Fg5M6LF.png"} width = "50" height = "50" alt = "Adobe Audition" />
         <p><span> Adobe Audition</span></p>
        </div>

        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/6EWSJ38.pngg"} width = "50" height = "50" alt = "Adobe Mixamo" />
         <p><span> Adobe Mixamo</span></p>
        </div>

        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/bL7y7oO.png"} width = "50" height = "50" alt = "GitHub" /> 
          <p> <span> Github</span></p>
        </div>

        <div class="flex-child-element magenta">
          < img src = {"https://i.imgur.com/QwquTqZ.png"} width = "50" height = "50" alt = "Jira" />
          <p><span> Jira</span></p>
        </div>


        </div>
        </div>

       
        



      

    <div className="content__body">
          <p id="page-description">
            <span>
             Featured languages: 
            </span>
          </p>
    </div>


    


    <div class = "column" align="center">
      <div class="flex-parent-element">
       
        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/8SCfipV.png"} width = "50" height = "50" alt = "C#" />
         <p> <span>C#</span></p>
        </div>

        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/ZOo1OTl.png"} width = "50" height = "50" alt = "C#" />
         <p> <span>CSS</span></p>
        </div>

        <div class="flex-child-element magenta">
         <img src = {"https://i.imgur.com/HHdwP9v.png"} width = "50" height = "50" alt = "C#" />
          <p><span>JavaScript</span></p>
        </div>

        <div class="flex-child-element magenta">
          <img src = {"https://i.imgur.com/Lgbw1Fr.png"} width = "50" height = "50" alt = "C#" />
         <p> <span>HTML</span></p>
        </div>

        <div class="flex-child-element magenta">
        <img src = {"https://i.imgur.com/8h6natt.png"} width = "75" height = "50" alt = "C#" />
        <p> <span>PHP</span></p>
        </div>


        </div>
        </div>






        <div>
        </div>
      </div>
    </PageLayout>
  );
};
