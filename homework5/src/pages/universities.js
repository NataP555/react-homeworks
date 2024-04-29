import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getUniversitiesByCountry } from '../api';
import UniversityCard from "../components/UniversityCard";


const Universities = () => {
  const [searchParams] = useSearchParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const country = searchParams.get('country');
 
  function getUniversities() {
    setIsLoading(true);
    getUniversitiesByCountry(country)
      .then((universities) => {
        setUniversities(universities);
      })
      .catch(() => {
        setErrorMessage("Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getUniversities();
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: "flex" }}>
        <span>loading... </span>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h1>Universities of {country} </h1>
      {universities.map(university => 
        <UniversityCard key={university.name} university={university}/>        
      )}
      {errorMessage && (
        <div style={{ color: "red" }}>
          <span> {errorMessage} </span>
        </div>
      )}
    </div>
    
  )
}

export default Universities;


