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
      icon: "https://i.imgur.com/z7RhnEe.png",
    },
    {
      title: "Lucas Troutman",
      description:
        "Part-time instructional aide for local school. Hobby musician with an interest in game-development.",
      icon: "https://i.imgur.com/ym6olN6.png",
    },
    {
      title: "Gino Vitug",
      description:
        "Computer Science major with an interest in UI/UX design. Enjoyer of music, memes, video games, and mechanical keyboards.",
      icon: "https://i.imgur.com/OfT6X4Z.jpeg",
    },
    {
      title: "Kathleen Navarro",
      description:
        "Part-time computer science student, part-time web developer for a local company. I am sleepy always. I am mostly familiar with working on back end technologies, but wanting to learn more front end.",
      icon: "https://i.imgur.com/E7vRr7Z.png",
    },
    {
      title: "Murssal Rahmati",
      description:
        "Computer Science student with an interest in games, art, and cats.",
      icon: "https://i.imgur.com/AwtwJ2w.png",
    },
    {
      title: "Laurie Gelardi",
      description:
        "Assistant Professor of Nursing at California State University, Northridge",
      icon: "https://media.licdn.com/dms/image/C4E03AQGd0i7C9AJqSQ/profile-displayphoto-shrink_400_400/0/1517460312357?e=1686182400&v=beta&t=Yw6oPMhS71T_DHfw3cvlwU2lC8rKVs14F4nY_vgRhUs",
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
              <strong>This is the team working on the Nursing VR project!</strong>
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
      </div>
    </div>  
    </PageLayout>
  );
};
