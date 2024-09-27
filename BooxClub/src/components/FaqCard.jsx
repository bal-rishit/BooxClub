import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';

function FaqCard(props) {  
  return (
    <div>
        <Accordion
          expanded={props.expanded}
          onChange={props.onChange}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{props.question}</Typography>
          </AccordionSummary>
          {/* <AccordionDetails> */}
          <AccordionDetails style={{ backgroundColor: props.blueBackground ? 'skyblue' : 'inherit' }}>
             <Typography>{props.answer}</Typography> 
            {/* <Typography style={{ color: props.blueAnswer ? 'blue' : 'inherit'}}>{props.answer}</Typography> */}
          </AccordionDetails>
        </Accordion>
    </div>
  )
  
}

export default FaqCard;
