"use client";

import { useState } from "react";
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  AccordionProps as MuiAccordionProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordionItemProps {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: ReadonlyArray<AccordionItemProps>;
  className?: string;
}

const Accordion = ({ items, className }: AccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <MuiAccordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
};

export { Accordion };
