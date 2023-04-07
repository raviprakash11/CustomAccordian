import React, { useState, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function SimpleAccordion() {
  const [viewAllComponent, setViewAllComp] = useState(false);
  const handleViewAll = () => {
    setViewAllComp(!viewAllComponent);
  };
  const ref = useRef(null);
    const ref1 = useRef(null);
  const [iconUPnDown, setIconUPnDown] = useState(true);
  const handleClick = () => {
    setIconUPnDown(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick1 = () => {
    setIconUPnDown(true);
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "40%" }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Accordion 1</div>
          </AccordionSummary>
          <AccordionDetails style={{ height: "5.6rem", overflowY: "scroll" }} >
            <div style={{ backgroundColor: "grey" }} ref={ref1}>
              1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
            <div style={{ backgroundColor: "blue" }}>
              2.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div />
              {!viewAllComponent && (
                <div style={{ color: "brown" }} onClick={handleViewAll}>
                  View All
                </div>
              )}
            </div>
            {/* <button onClick={scrollToTop} className="back-to-top">
                    <ExpandCircleDownIcon/>
                  </button> */}
            {viewAllComponent && (
              <div>
                {/* {showButton && (
                  <button onClick={scrollToTop} className="back-to-top">
                    <ExpandCircleDownIcon/>
                  </button>
                )} */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ position: "fixed" }}>
                    {iconUPnDown ? (
                      <ExpandCircleDownIcon onClick={handleClick} />
                    ) : (
                      <ArrowCircleUpIcon onClick={handleClick1} />
                    )}
                  </div>
                </div>
                <div style={{ backgroundColor: "grey" }}>
                  3.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
                <div style={{ backgroundColor: "blue" }}>
                  4.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
                <div style={{ backgroundColor: "grey" }}>
                  5.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
                <div style={{ backgroundColor: "blue" }}>
                  6.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
                <div style={{ backgroundColor: "grey" }}>
                  7.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
                <div style={{ backgroundColor: "blue" }}>
                  8.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
                {viewAllComponent && (
                  <div
                    style={{ color: "brown" }}
                    onClick={handleViewAll}
                    ref={ref}
                  >
                    View less
                  </div>
                )}
              </div>
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div>Accordion 2</div>
          </AccordionSummary>
          <AccordionDetails style={{ height: "5.6rem", overflowY: "scroll" }}>
            {true ? (
              <p> you reached bottom of page. Refresh page and begin again</p>
            ) : (
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs. The passage is attributed to
                an unknown typesetter in the 15th century who is thought to have
                scrambled parts of Cicero's De Finibus Bonorum et Malorum for
                use in a type specimen book Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs. The passage is attributed to an unknown
                typesetter in the 15th century who is thought to have scrambled
                parts of Cicero's De Finibus Bonorum et Malorum for use in a
                type specimen book Lorem ipsum, or lipsum as it is sometimes
                known, is dummy text used in laying out print, graphic or web
                designs. The passage is attributed to an unknown typesetter in
                the 15th century who is thought to have scrambled parts of
                Cicero's De Finibus Bonorum et Malorum for use in a type
                specimen book Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print, graphic or web designs.
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of Cicero's De
                Finibus Bonorum et Malorum for use in a type specimen book Lorem
                ipsum, or lipsum as it is sometimes known, is dummy text used in
                laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs. The passage is attributed to
                an unknown typesetter in the 15th century who is thought to have
                scrambled parts of Cicero's De Finibus Bonorum et Malorum for
                use in a type specimen book Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs. The passage is attributed to an unknown
                typesetter in the 15th century who is thought to have scrambled
                parts of Cicero's De Finibus Bonorum et Malorum for use in a
                type specimen book Lorem ipsum, or lipsum as it is sometimes
                known, is dummy text used in laying out print, graphic or web
                designs. The passage is attributed to an unknown typesetter in
                the 15th century who is thought to have scrambled parts of
                Cicero's De Finibus Bonorum et Malorum for use in a type
                specimen book Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print, graphic or web designs.
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of Cicero's De
                Finibus Bonorum et Malorum for use in a type specimen book Lorem
                ipsum, or lipsum as it is sometimes known, is dummy text used in
                laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs. The passage is attributed to
                an unknown typesetter in the 15th century who is thought to have
                scrambled parts of Cicero's De Finibus Bonorum et Malorum for
                use in a type specimen book Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs. The passage is attributed to an unknown
                typesetter in the 15th century who is thought to have scrambled
                parts of Cicero's De Finibus Bonorum et Malorum for use in a
                type specimen book Lorem ipsum, or lipsum as it is sometimes
                known, is dummy text used in laying out print, graphic or web
                designs. The passage is attributed to an unknown typesetter in
                the 15th century who is thought to have scrambled parts of
                Cicero's De Finibus Bonorum et Malorum for use in a type
                specimen book Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print, graphic or web designs.
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of Cicero's De
                Finibus Bonorum et Malorum for use in a type specimen book Lorem
                ipsum, or lipsum as it is sometimes known, is dummy text used in
                laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book Lorem ipsum, or
                lipsum as it is sometimes known, is dummy text used in laying
                out print, graphic or web designs. The passage is attributed to
                an unknown typesetter in the 15th century who is thought to have
                scrambled parts of Cicero's De Finibus Bonorum et Malorum for
                use in a type specimen book Lorem ipsum, or lipsum as it is
                sometimes known, is dummy text used in laying out print, graphic
                or web designs. The passage is attributed to an unknown
                typesetter in the 15th century who is thought to have scrambled
                parts of Cicero's De Finibus Bonorum et Malorum for use in a
                type specimen book Lorem ipsum, or lipsum as it is sometimes
                known, is dummy text used in laying out print, graphic or web
                designs. The passage is attributed to an unknown typesetter in
                the 15th century who is thought to have scrambled parts of
                Cicero's De Finibus Bonorum et Malorum for use in a type
                specimen book Lorem ipsum, or lipsum as it is sometimes known,
                is dummy text used in laying out print, graphic or web designs.
                The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of Cicero's De
                Finibus Bonorum et Malorum for use in a type specimen book
              </p>
            )}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
