//import React, { useEffect, useState } from "react";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
//import { getPublicResource } from "../services/message.service";
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
        "Our professor and advisor for Computer Science Senior Design at California State University, Northridge",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    {
      title: "Dr. Laurie Gelardi",
      description:
        "A major supporter, program tester, and provider of Nursing resources at California State University, Northridge",
      icon: "https://i.imgur.com/C6HjF51.png",
    },
    
  ];

  return (
    <PageLayout>
      <div className="content-layout">
        <Helmet>
          <title>About the Team</title>
        </Helmet>
        <h1 id="page-title" className="content__title">
          About Us
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              <strong>This is the Computer Science development team of the Nursing Virtual Reality project 2023!</strong>
            </span>
          </p>
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

        <p>
            <span>
              <strong>Contributors and Stakeholders of the Nursing Virtual Reality Project 2023</strong>
            </span>
        </p>
        
          <div>
          {stakeholdersList.map((feature) => (
            <Auth0Feature
              key={feature.resourceUrl}
              title={feature.title}
              description={feature.description}
              resourceUrl={feature.resourceUrl}
              icon={feature.icon}
            />
          ))}
          </div>
      </div>
    </div>  
    </PageLayout>
  );
};
