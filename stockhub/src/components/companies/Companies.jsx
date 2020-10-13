import React, { useState, useContext } from "react";
import { CompaniesContext } from "./GetCompanies";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import "./CompanyGrid.css"

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
          <div style={{ textAlign: "center"}}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/companies/" + company.symbol}
            >
              <CompanyDiv>
                {firstLetter + restOfTheWord}
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
    width: 350px;
    border: solid 1px;
    border-radius: 20px;
    margin: 5px;
    float: center;
    text-align: center;
    background: #fff;

    &:hover {
      background-color: cornflowerblue;
    }
  `;

  const ContainerDiv = styled.div`
    /*
    display: grid;
    grid-template-columns: auto auto auto;
    margin: auto;
    border: solid 3px white;
    border-radius : 10px;
    width: 81%;
    */
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;

  `;

  let content = (
    <React.Fragment>
      <div style={{ textAlign: "center", margin: "auto", background: "#1c2237" }}>
        <input className="inputField"
          style={{
            margin: "30px",
            width: "600px",
            background: "#fff",
            borderRadius: "10px",
            height:"30px"
            }}
          type="text"
          onChange={handleChange}
        />
        <div className="cards">
          {companies.map((company) => renderSearched(company))}
        </div>
      </div>
    </React.Fragment>
  );

  return content;
};
export default CompanyFinder;
