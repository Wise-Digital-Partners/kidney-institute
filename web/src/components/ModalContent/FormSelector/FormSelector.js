import React from "react";
import DialysisIndio from "../DialysisIndio";
import DialysisRanchoMirage from "../DialysisRanchoMirage";
import DialysisLaQuinta from "../DialysisLaQuinta";
import DialysisCoachella from "../DialysisCoachella";
import NephrologyIndio from "../NephrologyIndio";
import NephrologyLaQuinta from "../NephrologyLaQuinta";

function FormSelector({ currentForm }) {
  switch (currentForm) {
    case "dialysisIndio":
      return <DialysisIndio />;
    case "dialysisRanchoMirage":
      return <DialysisRanchoMirage />;
    case "dialysisLaQuinta":
      return <DialysisLaQuinta />;
    case "dialysisCoachella":
      return <DialysisCoachella />;
    case "nephrologyIndio":
      return <NephrologyIndio />;
    case "nephrologyLaQuinta":
      return <NephrologyLaQuinta />;
    default:
      return <></>;
  }
}

export default FormSelector;
