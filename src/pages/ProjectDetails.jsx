import React from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>ProjectDetails : {id}</h1>
    </div>
  );
}

export default ProjectDetails;
