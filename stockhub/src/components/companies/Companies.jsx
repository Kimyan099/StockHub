import React, { useState, useContext } from "react";
import { CompaniesContext } from "./GetCompanies";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";

const CompanyFinder = (props) => {
  const [companies] = useContext(CompaniesContext);
  const [companyName, setCompanyName] = useState("");

  const handleChange = (event) => {
    setCompanyName(event.target.value);
    console.log(companyName);
  };

  



  const renderSearched = (company) => {
    if (company.description !== ""){
      if (
        company.description.toLowerCase().includes(companyName.toLowerCase()) ||
        companyName === ""
      ) {
        let firstLetter = company.description.charAt(0);
        let restOfTheWord = company.description.toLowerCase().slice(0);
        return (
          <div style={{ textAlign: "center" }}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/companies/" + company.symbol}
            >
              <CompanyDiv>
                  
                {firstLetter + restOfTheWord}
                {"\n"}
                <Route path={"/companies/" + company.symbol}>
                  <CompanyDetails symbol={company.symbol} />
                </Route>
              </CompanyDiv>
            </Link>
          </div>
        );
      } else {
        return null;
      }
    } else {return null}  
  };

  const CompanyDiv = styled.div`
    padding: 10px;
    width: 400px;
    border: solid 1px;
    border-radius: 20px;
    margin: 5px;
    float: center;
    text-align: center;
    &:hover {
      background-color: cornflowerblue;
    }
  `;

  const ContainerDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    margin: auto;
  `;

  let content = (
    <React.Fragment>
      <div style={{ textAlign: "center", margin: "auto" }}>
        <input
          style={{ margin: "30px", width: "600px" }}
          type="text"
          onChange={handleChange}
        />
        <ContainerDiv>
          {companies.map((company) => renderSearched(company))}
        </ContainerDiv>
      </div>
    </React.Fragment>
  );

  return content;
};
export default CompanyFinder;
