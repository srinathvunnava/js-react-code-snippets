import React, { useEffect, useState } from "react";

function SetTimeout() {
  const [name, setName] = useState("Please Login");

  useEffect(() => {
    const timer = setTimeout(() => {
      setName("Welcome to my page");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={{
        fontSize: "25px",
        color: "green",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {name}
    </div>
  );
}

export default SetTimeout;
