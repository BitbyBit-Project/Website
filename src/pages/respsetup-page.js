import React, { useEffect, useState } from "react";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";

export const RespSetupPage = () => {
  const [node0, set0] = useState("");
  const [node1, set1] = useState("");
  const [node2, set2] = useState("");
  const [node3, set3] = useState("");
  const [node4, set4] = useState("");
  const [node5, set5] = useState("");
  const [node6, set6] = useState("");
  const [node7, set7] = useState("");
  const [node8, set8] = useState("");
  const [node9, set9] = useState("");
  const [node10, set10] = useState("");
  const [node11, set11] = useState("");
  const [node12, set12] = useState("");
  const [node13, set13] = useState("");
  const [node14, set14] = useState("");
  const [node15, set15] = useState("");
  const [node16, set16] = useState("");
  const [node17, set17] = useState("");
  const [node18, set18] = useState("");
  const [node19, set19] = useState("");
  const [node20, set20] = useState("");

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
          <title>CardioSetupPage</title>
        </Helmet>
      <div className="content-layout" 
      >
        <h1 id="page-title" className="content__title">
        Respiratory Exam Setup Page
        </h1>
        {/* <div className="content__body">
          <p id="page-description">
            <span>
              <strong>Nodes and stuff</strong>
            </span>
          </p>
        </div> */}

        
      <p>
          <hr></hr>
          <br></br>
        </p>


      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin:'-8%', padding: "10%"
      }}>
      <div style={{ width: "40%" }}>
      <div style={{position: "relative", display: "inline-block"}}>
      <img src="https://i.imgur.com/LBt41I0.png" alt=""/>

      {/* 5 Major Landmarks */}
      <div className="nodeHeart" style={{ top: "140px", left: "70px" }}></div>
      <div className="nodeHeart" style={{ top: "140px", left: "100px" }}></div>
      <div className="nodeHeart" style={{ top: "157px", left: "105px" }}></div>
      <div className="nodeHeart" style={{ top: "175px", left: "108px" }}></div>
      
      
      {/* Breathing */}
        {/* Front */}
      <div className="nodeBreathing" style={{ top: "100px", left: "73px" }}></div>
      <div className="nodeBreathing" style={{ top: "100px", left: "96px" }}></div>
      <div className="nodeBreathing" style={{ top: "250px", left: "154px" }}></div>
      <div className="nodeBreathing" style={{ top: "250px", left: "15px" }}></div>
      <div className="nodeBreathing" style={{ top: "190px", left: "105px" }}></div>
      <div className="nodeBreathing" style={{ top: "190px", left: "65px" }}></div>
      <div className="nodeBreathing" style={{ top: "150px", left: "115px" }}></div>
      <div className="nodeBreathing" style={{ top: "150px", left: "55px" }}></div>

        {/* Sides */}
      <div className="nodeBreathingSide" style={{ top: "150px", left: "260px" }}></div>
      <div className="nodeBreathingSide" style={{ top: "170px", left: "265px" }}></div>

      <div className="nodeBreathingSide" style={{ top: "160px", left: "45px" }}></div>

      <div className="nodeBreathingSide" style={{ top: "150px", left: "345px" }}></div>
      <div className="nodeBreathingSide" style={{ top: "170px", left: "340px" }}></div>

        {/* Back */}
      <div className="nodeBreathing" style={{ top: "120px", left: "320px" }}></div>
      <div className="nodeBreathing" style={{ top: "120px", left: "282px" }}></div>
      <div className="nodeBreathing" style={{ top: "155px", left: "315px" }}></div>
      <div className="nodeBreathing" style={{ top: "155px", left: "287px" }}></div>
      <div className="nodeBreathing" style={{ top: "190px", left: "320px" }}></div>
      <div className="nodeBreathing" style={{ top: "190px", left: "282px" }}></div>
      

    </div>

      </div>
      <div style={{ width: "20%" }}>
        {/* Second column content */
      <div className="dropdown-menu-container">
        <div className="dropdown-title">LUL P bNode:</div>
        <div className="dropdown-menu">
        <select className="dropdown-menu-content" onChange={(e) => set0(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>

        <div className="dropdown-title">RUL P bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set1(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">BL A hNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set2(e.target.value)}>
          <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="0">Normal 1 2</option>
          
          
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">BR A hNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set3(e.target.value)}>
        <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="0">Normal 1 2</option>
          
          
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LUL A bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set4(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">RUL A bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set5(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">RUL L bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set6(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        </div>
      </div>}
      </div>


      <div style={{ width: "20%" }}>
        {/* Third column content */
      <div className="dropdown-menu-container">
        <div className="dropdown-title">LUL L bNode:</div>
        <div className="dropdown-menu">
        <select className="dropdown-menu-content" onChange={(e) => set7(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>

        <div className="dropdown-title">LML A bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set8(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">RML P bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set9(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">Apex A hNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set10(e.target.value)}>
        <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="0">Normal 1 2</option>
          
          
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LL A hNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set11(e.target.value)}>
        <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="0">Normal 1 2</option>
          
          
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LML P bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set12(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">RML A bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set13(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        </div>
      </div>}
      </div>


      <div style={{ width: "20%" }}>
        {/* Fourth column content */
      <div className="dropdown-menu-container">
        <div className="dropdown-title">RML L bNode:</div>
        <div className="dropdown-menu">
        <select className="dropdown-menu-content" onChange={(e) => set14(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>

        <div className="dropdown-title">LLL P bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set15(e.target.value)}>
        <option value="4">Expiratory Wheezing</option>
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">RLL P bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set16(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">LLL A bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set17(e.target.value)}>
        <option value="4">Expiratory Wheezing</option>
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">RLL A bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set18(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">RLL L bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set19(e.target.value)}>
          
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          <option value="4">Expiratory Wheezing</option>
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        
        <div className="dropdown-title">LLL L bNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set20(e.target.value)}>
          <option value="4">Expiratory Wheezing</option>
          <option value="0">Bronchial</option>
          <option value="1">Crackles-Coarse</option>
          <option value="2">Crackles-Fine</option>
          <option value="3">Diminished</option>
          
          <option value="5">Pleural Rub</option>
          <option value="6">Rhonchi</option>
          <option value="7">Stridor</option>
          <option value="8">Vesicular</option>
        </select>
        </div>
      </div>}
      </div>
    </div>
      </div>

    </PageLayout>
  );
};
