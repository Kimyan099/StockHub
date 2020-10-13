import React, { useEffect, useState } from "react";
import axios from "axios";


const CompanyDetails = (props) => {
  const [company, setCompany] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const { symbol } = props;

  const access_token =
    "bu21mlf48v6u9tetnbt0";

  useEffect(() => {
    axios
      .get(`https://finnhub.io/api/v1//stock/profile2?symbol=${symbol}&token=${access_token}`)
      .then((res) => {
        setCompany(res.data);
        if (res.data.logo) {
          setImgUrl(res.data.logo)
        } else {
          setImgUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png")
        }
        console.log(res.data)
      });
  }, [symbol]);


  let content = (
    <div>
       <img alt="LOGO" src={imgUrl} style={{margin:"20px", width:"150px", height:"150px"}}></img> 
      <p>Since {company.ipo}</p>
      <p>Country: {company.country}</p>
      <p>Website: {company.weburl}</p>
      <p>Field: {company.finnhubIndustry}</p>
    </div>
  );

  return content;
};

export default CompanyDetails;