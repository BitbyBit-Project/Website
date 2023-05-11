import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { getPublicResource } from "../services/message.service";
import { Helmet } from "react-helmet";
import { useMutation, QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import CardioQuery from "../components/cardio.js";

const theClient = new QueryClient();


export const CardioSetupPage = () => {
  const [node0, set4] = useState("");
  const [node1, set5] = useState("");
  const [node2, set6] = useState("");
  const [node3, set7] = useState("");
  const [node4, set8] = useState("");

  const [BPM, setBPM] = useState("");

  const [message, setMessage] = useState("");
  

  /* Color Changes for nodes when corresponding dropdown menus are clicked */
  const [isOpen0, setIsOpen0] = useState(false);
  const [circleColor0, setCircleColor0] = useState("transparent");
  const handleDropdownToggle0 = (event) => {
    setIsOpen0(!isOpen0);
    setCircleColor0(prevColor => prevColor === "transparent" ? "white" : "transparent");
  };
  const [isOpen1, setIsOpen1] = useState(false);
  const [circleColor1, setCircleColor1] = useState("transparent");
  const handleDropdownToggle1 = (event) => {
    setIsOpen1(!isOpen1);
    setCircleColor1(prevColor => prevColor === "transparent" ? "white" : "transparent");
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
    setCircleColor4(prevColor => prevColor === "transparent" ? "white" : "transparent");
  };
  const [isOpen5, setIsOpen5] = useState(false);
  const [circleColor5, setCircleColor5] = useState("transparent");
  const handleDropdownToggle5 = (event) => {
    setIsOpen5(!isOpen5);
    setCircleColor5(prevColor => prevColor === "transparent" ? "green" : "transparent");
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
  }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

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


  function buildQuery(tableName, columns, values) {
    const columnsString = columns.map((column) => `\`${column}\``).join(", ");
    const valuesString = values.map((value) => `'${value}'`).join(", ");
    return `INSERT INTO \`NursingVR\`.\`${tableName}\` (${columnsString}) VALUES (${valuesString});`;
  }
  
  const handleSubmit = () => {
    const tableName = "cardiovascular_exam_instuctor_answers";
    const columns = ["RSB_2IS", "LSB_2IS", "LSB_3IS", "LSB_4IS", "LSB_5IS"];
    const values = [set4, set5, set6, set7, set8];
    const query = buildQuery(tableName, columns, values);
  
    fetch("http://localhost:3000/submit-query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Oh no!!!!! The network response was not ok :(");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
};
  

  return (
    <QueryClientProvider client={theClient}>
    <PageLayout>
        <Helmet>
          <title>Cardiovascular Exam Setup</title>
        </Helmet>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
        Cardiovascular Exam Setup
        </h1>
        { <div className="content__body">
          <p id="page-description">
            <span>
              <strong>Nodes and stuff</strong>
              <br></br>
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

      {/* 5 Major Landmarks */}
      <div className="nodeHeart" style={{ top: "140px", left: "70px", backgroundColor: circleColor0  }}></div>
      <div className="nodeHeart" style={{ top: "140px", left: "100px", backgroundColor: circleColor1 }}></div>
      <div className="nodeHeart" style={{ top: "157px", left: "105px", backgroundColor: circleColor2  }}></div>
      <div className="nodeHeart" style={{ top: "175px", left: "108px", backgroundColor: circleColor3  }}></div>
      <div className="nodeHeart" style={{ top: "190px", left: "115px", backgroundColor: circleColor4  }}></div>
      {/* Haptics */}
      <div className="nodeHaptic" style={{ top: "95px", left: "73px", backgroundColor: circleColor5}}></div>
      <div className="nodeHaptic" style={{ top: "95px", left: "96px", backgroundColor: circleColor5}}></div>
      <div className="nodeHaptic" style={{ top: "250px", left: "154px", backgroundColor: circleColor5 }}></div>
      <div className="nodeHaptic" style={{ top: "250px", left: "15px", backgroundColor: circleColor5}}></div>
    </div>

      </div>
      
      <div style={{ width: "30%" }}>
        {/* Second column content */
        <div className="dropdown-menu-container" >
        <div className="dropdown-title">RSB 2IS pNode:</div>
        <div className="dropdown-menu">
          <select className="dropdown-menu-content" onClick={handleDropdownToggle0} onChange={(e) => set4(e.target.value)}>
            <option value="0">Normal 1 2</option>
            <option value="1">Normal S1 S2</option>
            <option value="2">S1 Only</option>
            <option value="3">S3 Only</option>
            <option value="4">S3 S4</option>
            <option value="5">S4 Only</option>
          </select>
          


        <div className="dropdown-title">LSB 2IS pNode:</div>
        <select className="dropdown-menu-content" onClick={handleDropdownToggle1} onChange={(e) => set5(e.target.value)}>
          <option value="2">S1 Only</option>
          <option value="0">Normal 1 2</option>
          <option value="1">Normal S1 S2</option>
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LSB 3IS pNode:</div>
        <select className="dropdown-menu-content" onClick={handleDropdownToggle2} onChange={(e) => set6(e.target.value)}>
          <option value="0">Normal 1 2</option>
          <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LSB 4IS pNode:</div>
        <select className="dropdown-menu-content" onClick={handleDropdownToggle3} onChange={(e) => set7(e.target.value)}>
          <option value="0">Normal 1 2</option>
          <option value="1">Normal S1 S2</option>
          <option value="2">S1 Only</option>
          <option value="3">S3 Only</option>
          <option value="4">S3 S4</option>
          <option value="5">S4 Only</option>
        </select>
        
        <div className="dropdown-title">LSB 5IS pNode:</div>
        <select className="dropdown-menu-content" onClick={handleDropdownToggle4} onChange={(e) => set8(e.target.value)}>
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
          <select className="dropdown-menu-content" onClick={handleDropdownToggle5} onChange={(e) => setBPM(e.target.value)}>
            <option value="" disabled selected>BPM </option>
            <option value="0">74</option>
          </select>
          </div>
          </div>
      </div>}
      </div>
      <div>
      <button onClick={handleSubmit}>Submit Setup</button>
      </div>
      </div>
      </div>
    </PageLayout>
    </QueryClientProvider>
  );
};
