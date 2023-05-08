import React, { useState } from "react";

export default function CardioQuery(props) {
  const [set4, setSet4] = useState("0");
  const [set5, setSet5] = useState("0");
  const [set6, setSet6] = useState("0");
  const [set7, setSet7] = useState("0");
  const [set8, setSet8] = useState("0");

  const { handleDropdownToggle0, handleDropdownToggle1, handleDropdownToggle2, handleDropdownToggle3, handleDropdownToggle4, handleDropdownToggle5 } = props;

  const buildQuery = (set4, set5, set6, set7, set8) => {
    // Build and return the SQL query string using the dropdown values
    // For example:
    const query = `SELECT * FROM my_table WHERE col1 = ${set4} AND col2 = ${set5} AND col3 = ${set6} AND col4 = ${set7} AND col5 = ${set8}`;
    return query;
  };

  const handleQuerySubmit = () => {
    const query = buildQuery(set4, set5, set6, set7, set8);
    fetch(`/query?q=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        // Handle response data
      })
      .catch(error => {
        // Handle error
      });
  };

  return (
    <div>
      <button onClick={handleQuerySubmit}>Submit Setup</button>
    </div>
  );
}
