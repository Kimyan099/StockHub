import React, { useState, useContext, useEffect } from "react";
import { CompaniesContext } from "./GetCompanies";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import "./CompanyGrid.css";


const CompanyFinder = (props) => {
  const [companies] = useContext(CompaniesContext);
  const [companyName, setCompanyName] = useState("");

  const handleChange = (event) => {
    setCompanyName(event.target.value);
    console.log(companyName);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const renderSearched = (company) => {
    if (company.description !== ""){
      if (
        company.description.toLowerCase().includes(companyName.toLowerCase()) ||
        companyName === ""
      ) {
        let firstLetter = company.description.charAt(0);
        let restOfTheWord = company.description.toLowerCase().slice(0);
        
        return (
          <div className='companies-body'>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/companies/" + company.symbol}
            >
              
              <CompanyDiv>
                {firstLetter + restOfTheWord}
                
                <Route path={"/companies/" + company.symbol} exact>
                  <CompanyDetails symbol={company.symbol} changeCompanyName={props.changeCompanyName} />
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



  const CompnayPage = styled.div`
    text-align: center;
    margin: auto;
    background: #1c2237;
   `;

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


  //TODO style refactor

  let content = (
    <React.Fragment>
      <CompnayPage >
        <input className="inputField"
          type="text"
          onChange={handleChange}
        />
        <div className="cards">
          {companies.map((company) => renderSearched(company))}
        </div>
      </CompnayPage>
    </React.Fragment>
  );




  return content;
};
export default CompanyFinder;
