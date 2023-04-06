import React from "react";
//import { Auth0Features } from "../components/auth0-features";
import { HeroBanner } from "../components/hero-banner";
import { PageLayout } from "../components/page-layout";
import { Helmet } from "react-helmet";
//import { vrnBanner } from "../components/vrn-banner";

/*
<homeh1 id="page-title" className="content__title">
          Nursing VR
    </homeh1>
*/

export const HomePage = () => (
  <PageLayout>
    <div className="content-layout">
    <Helmet>
      <title>Nursing VR Homepage</title>
    </Helmet>
    <HeroBanner></HeroBanner>
    <div className="content__body">
          <p>
            <span>
              <strong>
                Nursing VR is a virtual reality project that aims to provide 
                nursing students a safe and effective way to practice their diagnosing 
                skills and for instructors, a tool for managing student assessments.
              </strong>
            </span>
          </p>
      </div>
    <div className="content__body">
      <p>
        <span>
          <strong>
            The product allows students to practice medical examinations (provided by CSUN Nursing Department) 
            which have been implemented into the program. The user will be able to 
            interact within a 3D virtual space along with a simulated patient, 
            medical tools, and other assets that nursing students would have access 
            to in a real-life medical room setting. Ideally, it would also provide 
            an immersive experience that a nursing student would have when practicing
            on a live patient. Our project is intended to  run on the 
            Oculus/Meta Quest 2. Because the program is built on the feedback and 
            sources provided by the CSUN Nursing Department, it focuses on allowing 
            CSUN nursing students to apply what they have learned or are currently 
            learning from the course curriculum, within Nursing VR. For example, 
            students will be able to apply techniques relating to the respiratory exam 
            and cardiovascular exam. The program provides an additional feature for the 
            user, allowing them to answer a performance checklist while using the program. 
            This performance checklist prompts the user to record their deductions and 
            findings when diagnosing the simulated patient. This same checklist can be 
            submitted by the user to receive feedback on whether their findings about 
            the patient were accurate. VR Nursing can be improved by additional features 
            including more examinations focusing on different body systems, and an 
            aspiring feature such as one that allows the user to give vocal commands 
            and questions to the simulated patient.
            </strong>
          </span>
        </p>
      </div>
    </div>
    
  </PageLayout>
);
