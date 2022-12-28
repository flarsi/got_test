import React from "react";
import { TooltipWrapper } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import './index.css'

function MoreInfo({ text }) {
  return (
    <div className="more-info">
      <TooltipWrapper content={text}>
        <div>i</div>
      </TooltipWrapper>
    </div>
  );
}

export default MoreInfo;
