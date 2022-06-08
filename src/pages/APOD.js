import React, { useEffect, useState } from "react";
import { fetchAPI } from "../functions/fetchAPI";

export const APOD = () => {
  const [loading, setLoading] = useState(true);
  const [apod, setApod] = useState("");

  useEffect(() => {
    async function asyncFetch() {
      let response = await fetchAPI(
        "https://api.nasa.gov/planetary/apod?api_key=MvHH5wL3MivG9rh8aYRrF2UD4lt9kxiB5HJ3dwFP"
      );
      setApod(response);
      setLoading(false);
      console.log(response);
    }
    asyncFetch();
  }, []);

  const background = {
    height: "85vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(" + apod.hdurl + ")",
  };

  if (!loading) {
    return (
      <>
        <h1 className="text-center my-2">{apod.title}</h1>
        <h3 className="text-center my-2">{apod.copyright}</h3>
        <div
          className="d-flex justify-content-center align-items-center"
          style={background}
        ></div>
        <p
          className="fw-light text-justify m-4"
          style={{ fontSize: "2rem", lineHeight: "2" }}
        >
          {apod.explanation}
        </p>
      </>
    );
  } else {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
};