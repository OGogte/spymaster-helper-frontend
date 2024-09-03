import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetData: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get("data");

    if (dataParam) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(dataParam));

        // Store the data in localStorage
        localStorage.setItem("hintData", JSON.stringify(decodedData));
        console.log("Data stored:", decodedData);

        // Redirect the user to the grid component, passing the data
        navigate("/game");
      } catch (error) {
        console.error("Failed to decode or parse data:", error);
      }
    } else {
      // If there's no data, just redirect to the homepage
      navigate("/");
    }
  }, [navigate]);

  return <div>Processing...</div>;
};

export default GetData;
