import React from "react";



const DetailsPage = (props) => {
    console.log("hello")
    const {symbol} = props.match.params;
    let content = (
    <p>Symbol: {symbol}</p>
    )

    return content
}

export default DetailsPage