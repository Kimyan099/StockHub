import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const CompaniesContext = createContext();

export const CompanyProvider = (props) => {
  const [companies, setCompanies] = useState([]);

  const access_token =
    "bu21mlf48v6u9tetnbt0";

  useEffect(() => {
    axios
      .get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${access_token}`)
      .then((res) => {
        setCompanies(res.data.slice(81,8500));
        console.log(res.data)
      });
  }, []);

  return (
    <CompaniesContext.Provider value={[companies, setCompanies]}>
      {props.children}
    </CompaniesContext.Provider>
  );
};