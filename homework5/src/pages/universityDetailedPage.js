import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUniversityByDomain } from '../api';

export default function UniversityDetaledPage() {
  const { domain } = useParams();

  const [errorMessage, setErrorMessage] = useState("");
  const [university, setUniversity] = useState();
  const [isLoading, setIsLoading] = useState(true);
 
  function getUniversity() {
    setIsLoading(true);
    getUniversityByDomain(domain)
      .then((universities) => {
        setUniversity(universities);
      })
      .catch(() => {
        setErrorMessage("Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getUniversity();
  }, []);


  if (isLoading) {
    return (
      <div style={{ display: "flex" }}>
        <span>loading... </span>
      </div>
    );
  }

  return (
    <div className="university-info">
      <h2>{university.name}</h2>
      <h3>Page: {university.web_pages[0]}</h3>
      <div>
        <span>Domain: {university.domains[0]}</span>
      </div>
      <h3>Country: {university.country}</h3>
    </div>
  );
}
