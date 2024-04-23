import React, { useState, useMemo } from 'react';
import { useNavigate, createSearchParams } from "react-router-dom";
import Select from 'react-select';
import countryList from 'react-select-country-list';

function CountrySelector() {
  const navigate = useNavigate();
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value);

    const search = createSearchParams({
      country: value.label,
    });

    navigate({
      pathname: "universities",
      search: search.toString(),
  });
  }

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector