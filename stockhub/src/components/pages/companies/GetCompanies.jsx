import React, { useEffect, useState, createContext } from "react";
import axios from "axios";


export const CompaniesContext = createContext();

export const CompanyProvider = (props) => {
  const [companies, setCompanies] = useState([]);

  const access_token =
    "bu21mlf48v6u9tetnbt0";

  useEffect(() => {
    axios
      .get(`http://localhost:8080/companies`)
      .then((res) => {
        setCompanies(res.data.slice(81,1000));
        console.log(res.data)
      });
  }, []);

  return (
    <CompaniesContext.Provider value={[companies, setCompanies]}>
      {props.children}
    </CompaniesContext.Provider>
  );
};