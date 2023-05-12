import React, { useEffect, useState } from "react";
//import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";
import { useMutation, QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Query } from "@tanstack/react-query";

const theClient2 = new QueryClient()

export const RespSetupPage = () => {
  const [node0, set0] = useState(0);
  const [node1, set1] = useState(0);
  const [node2, set2] = useState(0);
  const [node3, set3] = useState(0);
  const [node4, set4] = useState(0);
  const [node5, set5] = useState(0);
  const [node6, set6] = useState(0);
  const [node7, set7] = useState(0);
  const [node8, set8] = useState(0);
  const [node9, set9] = useState(0);
  const [node10, set10] = useState(0);
  const [node11, set11] = useState(0);
  const [node12, set12] = useState(0);
  const [node13, set13] = useState(0);
  const [node14, set14] = useState(0);
  const [node15, set15] = useState(0);
  const [node16, set16] = useState(0);
  const [node17, set17] = useState(0);
  const [node18, set18] = useState(0);
  const [node19, set19] = useState(0);
  const [node20, set20] = useState(0);

  const [message, setMessage] = useState("");
  /* Color Changes for nodes when corresponding dropdown menus are clicked */
  const [isOpen0, setIsOpen0] = useState(false);
  const [circleColor0, setCircleColor0] = useState("transparent");
  const handleDropdownToggle0 = (event) => {
    setIsOpen0(!isOpen0);
    setCircleColor0(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen1, setIsOpen1] = useState(false);
  const [circleColor1, setCircleColor1] = useState("transparent");
  const handleDropdownToggle1 = (event) => {
    setIsOpen1(!isOpen1);
    setCircleColor1(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen2, setIsOpen2] = useState(false);
  const [circleColor2, setCircleColor2] = useState("transparent");
  const handleDropdownToggle2 = (event) => {
    setIsOpen2(!isOpen2);
    setCircleColor2(prevColor => prevColor === "transparent" ? "white" : "transparent");
  };
  const [isOpen3, setIsOpen3] = useState(false);
  const [circleColor3, setCircleColor3] = useState("transparent");
  const handleDropdownToggle3 = (event) => {
    setIsOpen3(!isOpen3);
    setCircleColor3(prevColor => prevColor === "transparent" ? "white" : "transparent");
  };
  const [isOpen4, setIsOpen4] = useState(false);
  const [circleColor4, setCircleColor4] = useState("transparent");
  const handleDropdownToggle4 = (event) => {
    setIsOpen4(!isOpen4);
    setCircleColor4(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen5, setIsOpen5] = useState(false);
  const [circleColor5, setCircleColor5] = useState("transparent");
  const handleDropdownToggle5 = (event) => {
    setIsOpen5(!isOpen5);
    setCircleColor5(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen6, setIsOpen6] = useState(false);
  const [circleColor6, setCircleColor6] = useState("transparent");
  const handleDropdownToggle6 = (event) => {
    setIsOpen6(!isOpen6);
    setCircleColor6(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen7, setIsOpen7] = useState(false);
  const [circleColor7, setCircleColor7] = useState("transparent");
  const handleDropdownToggle7 = (event) => {
    setIsOpen7(!isOpen7);
    setCircleColor7(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen8, setIsOpen8] = useState(false);
  const [circleColor8, setCircleColor8] = useState("transparent");
  const handleDropdownToggle8 = (event) => {
    setIsOpen8(!isOpen8);
    setCircleColor8(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen9, setIsOpen9] = useState(false);
  const [circleColor9, setCircleColor9] = useState("transparent");
  const handleDropdownToggle9 = (event) => {
    setIsOpen9(!isOpen9);
    setCircleColor9(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen10, setIsOpen10] = useState(false);
  const [circleColor10, setCircleColor10] = useState("transparent");
  const handleDropdownToggle10 = (event) => {
    setIsOpen10(!isOpen10);
    setCircleColor10(prevColor => prevColor === "transparent" ? "white" : "transparent");
  };
  const [isOpen11, setIsOpen11] = useState(false);
  const [circleColor11, setCircleColor11] = useState("transparent");
  const handleDropdownToggle11 = (event) => {
    setIsOpen11(!isOpen11);
    setCircleColor11(prevColor => prevColor === "transparent" ? "white" : "transparent");
  };
  const [isOpen12, setIsOpen12] = useState(false);
  const [circleColor12, setCircleColor12] = useState("transparent");
  const handleDropdownToggle12 = (event) => {
    setIsOpen12(!isOpen12);
    setCircleColor12(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen13, setIsOpen13] = useState(false);
  const [circleColor13, setCircleColor13] = useState("transparent");
  const handleDropdownToggle13 = (event) => {
    setIsOpen13(!isOpen13);
    setCircleColor13(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen14, setIsOpen14] = useState(false);
  const [circleColor14, setCircleColor14] = useState("transparent");
  const handleDropdownToggle14 = (event) => {
    setIsOpen14(!isOpen14);
    setCircleColor14(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen15, setIsOpen15] = useState(false);
  const [circleColor15, setCircleColor15] = useState("transparent");
  const handleDropdownToggle15 = (event) => {
    setIsOpen15(!isOpen15);
    setCircleColor15(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen16, setIsOpen16] = useState(false);
  const [circleColor16, setCircleColor16] = useState("transparent");
  const handleDropdownToggle16 = (event) => {
    setIsOpen16(!isOpen16);
    setCircleColor16(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen17, setIsOpen17] = useState(false);
  const [circleColor17, setCircleColor17] = useState("transparent");
  const handleDropdownToggle17 = (event) => {
    setIsOpen17(!isOpen17);
    setCircleColor17(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen18, setIsOpen18] = useState(false);
  const [circleColor18, setCircleColor18] = useState("transparent");
  const handleDropdownToggle18 = (event) => {
    setIsOpen18(!isOpen18);
    setCircleColor18(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen19, setIsOpen19] = useState(false);
  const [circleColor19, setCircleColor19] = useState("transparent");
  const handleDropdownToggle19 = (event) => {
    setIsOpen19(!isOpen19);
    setCircleColor19(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };
  const [isOpen20, setIsOpen20] = useState(false);
  const [circleColor20, setCircleColor20] = useState("transparent");
  const handleDropdownToggle20 = (event) => {
    setIsOpen20(!isOpen20);
    setCircleColor20(prevColor => prevColor === "transparent" ? "yellow" : "transparent");
  };


  const handleDocumentClick = (event) => {
  // Check if the clicked element is within a select element
  const isWithinSelect = event.target.closest(".dropdown-menu-content");

  // Reset the circle colors to transparent if the click was not within a dropdown or select
  if (!isWithinSelect) {
    setCircleColor0("transparent");
    setCircleColor1("transparent");
    setCircleColor2("transparent");
    setCircleColor3("transparent");
    setCircleColor4("transparent");
    setCircleColor5("transparent");
    setCircleColor6("transparent");
    setCircleColor7("transparent");
    setCircleColor8("transparent");
    setCircleColor9("transparent");
    setCircleColor10("transparent");
    setCircleColor11("transparent");
    setCircleColor12("transparent");
    setCircleColor13("transparent");
    setCircleColor14("transparent");
    setCircleColor15("transparent");
    setCircleColor16("transparent");
    setCircleColor17("transparent");
    setCircleColor18("transparent");
    setCircleColor19("transparent");
    setCircleColor20("transparent");
  }
  };

  function buildQuery(tableName, columns, values) {
    const columnsString = columns.map((column) => `\`${column}\``).join(", ");
    const valuesString = values.map((value) => `'${value}'`).join(", ");
    return `INSERT INTO \`NursingVR\`.\`${tableName}\` (${columnsString}) VALUES (${valuesString});`;
  }

  const handleSubmit = async () => {
    const tableName = "respiratory_exam_instructor_answers";
    const columns = ["LUL_P_bNode", "RUL_P_bNode", "BL_A_hNode", "BR_A_hNode", "LUL_A_bNode", "RUL_A_bNode", "RUL_L_bNode", "LUL_L_bNode",
      "LML_A_bNode", "RML_P_bNode", "Apex_A_hNode", "LL_A_hNode", "LML_P_bNode", "RML_A_bNode", "RML_L_bNode", "LLL_P_bNode", "RLL_P_bNode",
      "LLL_A_bNode", "RLL_A_bNode", "RLL_L_bNode", "LLL_L_bNode"];
    const values = [node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10, node11, node12, node13, node14, node15, node16, node17, node18, node19, node20];
    const query = buildQuery(tableName, columns, values);
  
    try {
      const response = await fetch("http://54.213.233.117/submit-query2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values }),
      });
  
      if (response.ok) {
        toast.success("Data submitted successfully.");
      } else {
        throw new Error("Failed to submit data.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  

  return (
    <QueryClientProvider client={theClient2}>
    <PageLayout>
        <Helmet>
          <title>Respiratory Exam Setup</title>
        </Helmet>
      <div className="content-layout" 
      >
        <h1 id="page-title" className="content__title">
        Respiratory Exam Setup
        </h1>
        { <div className="content__body">
          <p id="page-description">
            <span>
              <strong>Customize the virtual patient for the Respiratory Exam with different audio files at different landmarks.
              Choose your options and press submit while program is running.</strong>
            </span>
          </p>
        </div> }

        
      <p>
          <hr></hr>
          <br></br>
        </p>


      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin:'-8%', padding: "10%"
      }}>
      <div style={{ width: "40%" }}>
      <div style={{position: "relative", display: "inline-block"}}>
      <img src="https://i.imgur.com/LBt41I0.png" alt=""/>

      {/* Major Landmarks */}
      <div className="nodeHeart" style={{ top: "140px", left: "70px", backgroundColor: circleColor3 }}></div>
      <div className="nodeHeart" style={{ top: "140px", left: "100px", backgroundColor: circleColor2 }}></div>
      <div className="nodeHeart" style={{ top: "157px", left: "105px", backgroundColor: circleColor11 }}></div>
      <div className="nodeHeart" style={{ top: "175px", left: "108px", backgroundColor: circleColor10 }}></div>
      
      
      {/* Breathing */}
        {/* Front */}
      <div className="nodeBreathing" style={{ top: "100px", left: "73px", backgroundColor: circleColor5 }}></div>
      <div className="nodeBreathing" style={{ top: "100px", left: "96px", backgroundColor: circleColor4 }}></div>
      {/* <div className="nodeBreathing" style={{ top: "250px", left: "154px", backgroundColor: circleColor3 }}></div> */}
      {/* <div className="nodeBreathing" style={{ top: "250px", left: "15px", backgroundColor: circleColor3 }}></div> */}
      <div className="nodeBreathing" style={{ top: "190px", left: "105px", backgroundColor: circleColor17 }}></div>
      <div className="nodeBreathing" style={{ top: "190px", left: "65px", backgroundColor: circleColor18 }}></div>
      <div className="nodeBreathing" style={{ top: "150px", left: "115px", backgroundColor: circleColor8 }}></div>
      <div className="nodeBreathing" style={{ top: "150px", left: "55px", backgroundColor: circleColor13 }}></div>

        {/* Sides */}
      <div className="nodeBreathingSide" style={{ top: "150px", left: "260px", backgroundColor: circleColor7 }}></div>
      <div className="nodeBreathingSide" style={{ top: "170px", left: "265px", backgroundColor: circleColor20 }}></div>

      <div className="nodeBreathingSide" style={{ top: "160px", left: "45px", backgroundColor: circleColor14 }}></div>

      <div className="nodeBreathingSide" style={{ top: "150px", left: "345px", backgroundColor: circleColor6 }}></div>
      <div className="nodeBreathingSide" style={{ top: "170px", left: "340px", backgroundColor: circleColor19 }}></div>

        {/* Back */}
      <div className="nodeBreathing" style={{ top: "120px", left: "320px", backgroundColor: circleColor1 }}></div>
      <div className="nodeBreathing" style={{ top: "120px", left: "282px", backgroundColor: circleColor0 }}></div>
      <div className="nodeBreathing" style={{ top: "155px", left: "315px", backgroundColor: circleColor9 }}></div>
      <div className="nodeBreathing" style={{ top: "155px", left: "287px", backgroundColor: circleColor12 }}></div>
      <div className="nodeBreathing" style={{ top: "190px", left: "320px", backgroundColor: circleColor16 }}></div>
      <div className="nodeBreathing" style={{ top: "190px", left: "282px", backgroundColor: circleColor15 }}></div>
      

    </div>

    </div>
      <div style={{ width: "20%" }}>
        {/* Second column content */
      <div className="dropdown-menu-container">
        <div className="dropdown-title">LUL P bNode:</div>
        <div className="dropdown-menu">
        <select className="dropdown-menu-content" onClick={handleDropdownToggle0} onChange={(e) => set0(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle1} onChange={(e) => set1(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle2} onChange={(e) => set2(e.target.value)}>
            <option value="1">Normal S1 S2</option>
            <option value="0">Heart Murmur</option>
            <option value="2">Normal S1 S2 74bpm</option>
            <option value="3">S1 Only</option>
            <option value="4">S3 Only</option>
            <option value="5">S3 S4</option>
            <option value="6">S4 Only</option>
        </select>
        
        <div className="dropdown-title">BR A hNode:</div>
        <select className="dropdown-menu-content" onClick={handleDropdownToggle3} onChange={(e) => set3(e.target.value)}>
            <option value="1">Normal S1 S2</option>
            <option value="0">Heart Murmur</option>
            <option value="2">Normal S1 S2 74bpm</option>
            <option value="3">S1 Only</option>
            <option value="4">S3 Only</option>
            <option value="5">S3 S4</option>
            <option value="6">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LUL A bNode:</div>
        <select className="dropdown-menu-content" onClick={handleDropdownToggle4} onChange={(e) => set4(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle5} onChange={(e) => set5(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle6} onChange={(e) => set6(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle7} onChange={(e) => set7(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle8} onChange={(e) => set8(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle9} onChange={(e) => set9(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle10} onChange={(e) => set10(e.target.value)}>
            <option value="1">Normal S1 S2</option>
            <option value="0">Heart Murmur</option>
            <option value="2">Normal S1 S2 74bpm</option>
            <option value="3">S1 Only</option>
            <option value="4">S3 Only</option>
            <option value="5">S3 S4</option>
            <option value="6">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LL A hNode:</div>
        <select className="dropdown-menu-content" onClick={handleDropdownToggle11} onChange={(e) => set11(e.target.value)}>
            <option value="1">Normal S1 S2</option>
            <option value="0">Heart Murmur</option>
            <option value="2">Normal S1 S2 74bpm</option>
            <option value="3">S1 Only</option>
            <option value="4">S3 Only</option>
            <option value="5">S3 S4</option>
            <option value="6">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LML P bNode:</div>
        <select className="dropdown-menu-content" onClick={handleDropdownToggle12} onChange={(e) => set12(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle13} onChange={(e) => set13(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle14} onChange={(e) => set14(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle15} onChange={(e) => set15(e.target.value)}>
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle16} onChange={(e) => set16(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle17} onChange={(e) => set17(e.target.value)}>
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle18} onChange={(e) => set18(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle19} onChange={(e) => set19(e.target.value)}>
          
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
        <select className="dropdown-menu-content" onClick={handleDropdownToggle20} onChange={(e) => set20(e.target.value)}>
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
    <div class="wrapper">
      <button onClick={handleSubmit}>Submit Setup</button>
    </div>
      <ToastContainer />
      </div>
      
    </PageLayout>
    </QueryClientProvider>
  );
};
