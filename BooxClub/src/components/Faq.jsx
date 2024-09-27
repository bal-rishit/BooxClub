import React, { useState } from "react";
import { questions } from "../questions";
import FaqCard from "./FaqCard";

function Faq() {
  const [expanded, setExpanded] = useState(null); 

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <div style={{ padding: "20px 0px 20px", display: "flex", flexDirection:"column", alignItems:"center"}}>
      <p style={{ textAlign: "center", fontSize: "50px", fontWeight: "bold"}}>
        Frequently Asked Questions
        
      </p>
      <div style={{margin: "0% 25% 0%" ,  paddingTop: "20px" }}>
        {questions.map((qItem, index) => (
          <FaqCard
            key={qItem.key}
            expanded={expanded === 'panel' + index}
            onChange={handleChange('panel' + index)}
            question={qItem.question}
            answer={qItem.answer}
            // blueAnswer={true}
            blueBackground={true} 
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;
