import React from "react";
//import { Auth0Features } from "../components/auth0-features";
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
    <br></br>
    <div className="content__body" align="justify">
      <p class='indent'>
          <span>
            <strong>
                Nursing VR is a virtual reality project that aims to provide 
                nursing students a safe, immersive, and effective way to practice their diagnosing 
                skills. We also aim to provide instructors a tool for managing student assessments 
                in a nursing course.
            </strong>
          </span>
        </p>
        <p class='indent'>
          <span>
            <strong>
                The product allows students to conduct human cardiovascular and respiratory assessments
                in a virtual environment. The user will be able to interact with a simulated patient, stethoscope
                clipboard menu, and other assets that nursing students would have access to in a real-life medical room setting.
                Our project was built in Unity and is intended to run on the Oculus/Meta Quest 2.
            </strong>
          </span>
        </p>
        <p class='indent'>
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
