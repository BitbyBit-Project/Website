import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Auth0Feature } from "../components/auth0-feature";
import { Helmet } from "react-helmet";


export const AboutPage = () => {
  const featuresList = [
    {
      title: "Miranda Medina",
      description:
        "Computer Science major, addicted to coffee and learning new things!",
      icon: "https://i.imgur.com/g555AOb.png",
    },
    {
      title: "Lucas Troutman",
      description:
        "Computer Science Major. Part-time instructional aide for local school. Hobby musician with an interest in game-development.",
      icon: "https://i.imgur.com/UPy4CTq.png",
    },
    {
      title: "Gino Vitug",
      description:
        "Computer Science major with an interest in UI/UX design. Enjoyer of music, memes, video games, and mechanical keyboards.",
      icon: "https://i.imgur.com/kHNzqs4.png",
    },
    {
      title: "Kathleen Navarro",
      description:
        "Part-time computer science student, part-time web developer for a local company. I am sleepy always. I am mostly familiar with working on back end technologies, but wanting to learn more front end.",
      icon: "https://i.imgur.com/y4c60N6.png",
    },
    {
      title: "Murssal Rahmati",
      description:
        "Computer Science student with an interest in games, art, and cats.",
      icon: "https://i.imgur.com/Hva0mP7.png",
    },
    
  ];

  const stakeholdersList = [
    {
      title: "Dr. Li Liu",
      description:
        "Our professor and advisor in Computer Science Senior Design at California State University, Northridge",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Dr. Laurie Gelardi",
      description:
        "Major supporter, program tester, and provider of Nursing resources at California State University, Northridge",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Professor Kevin Chaja",
      description:
        "Advisor to the previous development team of Computer Science seniors in 2021-2022 at California State University, Northridge",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Sam Q. Livesay",
      description:
        "Project Manager and Scrum Master for Development Team 2022",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Ben Nix-Bradley",
      description:
        "Unity Developer, Audio Implementation, & Animation Implementation for Development Team 2022",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Vardan Torosyan",
      description:
        "Unity Developer for Development Team 2022",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Aram Durgaryan",
      description:
        "Unity Developer for Development Team 2022",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Richard Nohles",
      description:
        "Unity Developer & Backend Developer for Development Team 2022",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Melissa Snell",
      description:
        "Supporter, program tester, and advisor for proper implementation of Nursing resources at California State University, Northridge",
      icon: "https://i.imgur.com/C6HjF51.png",
    }
    
  ];

  return (
    <PageLayout>
      <div className="content-layout">
        <Helmet>
          <title>About Us</title>
        </Helmet>
        <h1 id="page-title" className="content__title">
          About Us
        </h1>

        <p>
          <br></br>
          <hr></hr>
          <br></br>
        </p>

        <div className="content__body">
      
        <p class='indent' align="justify">
          <span>
            <strong>
                Nursing Virtual Reality allows students to conduct human cardiovascular and respiratory assessments
                in a virtual environment. The user will be able to interact with a simulated patient, stethoscope
                clipboard menu, and other assets that nursing students would have access to in a real-life medical room setting.
                Our project was built in Unity and is intended to run on the Oculus/Meta Quest 2.
            </strong>
          </span>
        </p>
        <p class='indent' align="justify">
          <span>
            <strong>
                Because the program is built on the feedback and 
                sources provided by the CSUN Nursing Department, it focuses on allowing 
                CSUN nursing students to apply what they have learned, or are currently 
                learning, from the course curriculum. Additionally, the program provides a feature which
                allows users to answer a performance checklist while using the program.
                This performance checklist prompts the user to record their deductions and 
                findings when diagnosing the simulated patient. This same checklist can be 
                submitted by the user to receive feedback on whether their findings about 
                the patient were accurate. Nursing VR can be improved by additional features 
                including more examinations focusing on different body systems, and an 
                aspiring feature such as one that allows the user to give vocal commands 
                and questions to the simulated patient.
            </strong>
          </span>
        </p>

        <br></br>
        <hr></hr>
        <br></br>

        <br></br>
        <h1 id="page-title" className="content__title">
          Development Team of 2023
        </h1>

        <br></br>
        
        <div className="auth0-features__grid">

        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
        </div>
        
        <br></br>
        <hr></hr>
        <br></br>

        <br></br>
        <h1 id="page-title" className="content__title">
        Contributors and Stakeholders of the NVR Project
        </h1>
        <br></br>
        
          <div className="auth0-features__grid">
          {stakeholdersList.map((feature) => (
            <div style={{margin: "5px", padding: "5px"}}>
            <Auth0Feature
              key={feature.resourceUrl}
              title={feature.title}
              description={feature.description}
              resourceUrl={feature.resourceUrl}
              icon={feature.icon}
            />
            </div>
          ))}
          </div>
      </div>
    </div>  
    </PageLayout>
  );
};
