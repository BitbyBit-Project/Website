import React, { useEffect, useState } from "react";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";



export const CardioSetupPage = () => {
  const [node0, set4] = useState("");
  const [node1, set5] = useState("");
  const [node2, set6] = useState("");
  const [node3, set7] = useState("");
  const [node4, set8] = useState("");

  const [BPM, setBPM] = useState("");

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
        Cardiovascular Exam Setup Page
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
      <div id ="heart1" className="nodeHeart" style={{ top: "140px", left: "70px" }}></div>
      <div className="nodeHeart" style={{ top: "140px", left: "100px" }}></div>
      <div className="nodeHeart" style={{ top: "157px", left: "105px" }}></div>
      <div className="nodeHeart" style={{ top: "175px", left: "108px" }}></div>
      <div className="nodeHeart" style={{ top: "190px", left: "115px" }}></div>
      {/* Haptics */}
      <div className="nodeHaptic" style={{ top: "95px", left: "73px" }}></div>
      <div className="nodeHaptic" style={{ top: "95px", left: "96px" }}></div>
      <div className="nodeHaptic" style={{ top: "250px", left: "154px" }}></div>
      <div className="nodeHaptic" style={{ top: "250px", left: "15px" }}></div>
    </div>

      </div>




      
      <div style={{ width: "30%" }}>
        {/* Second column content */
        <div className="dropdown-menu-container">
        <div className="dropdown-title">RSB 2IS pNode:</div>
        <div className="dropdown-menu">
          <select className="dropdown-menu-content" onChange={(e) => set4(e.target.value)}>
          
            <option value="0">Normal 1 2</option>
            <option value="1">Normal S1 S2</option>
            <option value="2">S1 Only</option>
            <option value="3">S3 Only</option>
            <option value="4">S3 S4</option>
            <option value="5">S4 Only</option>
          </select>


        <div className="dropdown-title">LSB 2IS pNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set5(e.target.value)}>
          <option value="2">S1 Only</option>
          <option value="0">Normal 1 2</option>
          <option value="1">Normal S1 S2</option>
          
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LSB 3IS pNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set6(e.target.value)}>
          <option value="0">Normal 1 2</option>
          
          <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LSB 4IS pNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set7(e.target.value)}>
         <option value="0">Normal 1 2</option>
          
          <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LSB 5IS pNode:</div>
        <select className="dropdown-menu-content" onChange={(e) => set8(e.target.value)}>
        <option value="0">Normal 1 2</option>
          
          <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        </div>
      </div>}
      </div>


      
      <div style={{ width:"30%" }}>
        {/* Third column content */
        <div className="dropdown-menu-container">
          <div style={{ width: "60%"}}>
          <div className="dropdown-menu">
          <div className="dropdown-title ">BPM:</div>
          <select className="dropdown-menu-content" onChange={(e) => setBPM(e.target.value)}>
            <option value="" disabled selected>BPM </option>
            <option value="0">1 million</option>
            <option value="1">2 million</option>
            <option value="2">90          </option>
          </select>
          </div>
          </div>
      </div>}
      </div>





      </div>
      </div>
    </PageLayout>
  );
};
