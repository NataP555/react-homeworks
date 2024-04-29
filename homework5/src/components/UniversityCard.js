import React from 'react';
import { useNavigate } from "react-router-dom";

const UniversityCard = (props) => {
  const navigate = useNavigate();
  const { university } = props;
  const domain = university.domains[0];

  return (
    <div>
      <span>{university.name}</span>
      <button onClick={() => {
        navigate(`/universities/${domain}`);
      }}
      >
        Detailed Information
      </button>
    </div>
  )
}

export default UniversityCard
