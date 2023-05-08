import React from "react";
import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { Helmet } from "react-helmet";

export const HomePage = () => (
  <PageLayout>
    <div className="content-layout">
    <Helmet>
      <title>Nursing VR Homepage</title>
    </Helmet>
    <HeroBanner></HeroBanner>
    <p></p>
    <p></p>
    <div className="content__body" align="justify">
      <p class='indent'>
          <span>
            <strong>
                Nursing Virtual Reality is a collaborative senior design project between 
                the Department of Nursing and the Department of Computer Science and has been 
                evolving for the past 5 years as a clinical training tool at California State University Northridge.
                The project's primary objective is to provide nursing students with a research-based
                and cost-effective platform to conduct physical assessments in-line with the CSUN nursing curriculum.
                The project offers a cost-effective training tool built on virtual reality, which aims to ensure
                every student receives the same high-quality education and experience. Our goal is to provide a
                safe, immersive, and effective way for students to practice their assessment skills and for
                instructors, a way to manage students' metrics. Our development in the past year features
                implementations of the cardiovascular assessment, animations, a user-interactable stethoscope,
                heartbeat and breathing sounds, controller haptics/pulsations, a database, a website, and user interfaces.
            </strong>
          </span>
        </p>
        <p align="center">
        Features & Components in Program Include:
          <ul>
            <li>Cardiovascular Assessment</li>
            <li>Respiratory Assessment</li>
            <li>3D Patient Model</li>
            <li>Medical Room & Furnishings</li>
            <li>Patient Animations</li>
            <li>Patient Customization</li>
            <li>Patient Interview</li>
            <li>Checklist Results</li>
            <li>Stethoscope</li>
            <li>Heartbeat Sounds</li>
            <li>Breathing Sounds</li>
            <li>User Hand Haptics</li>
          </ul>
        </p>
    </div>
    </div>
    
  </PageLayout>
);
