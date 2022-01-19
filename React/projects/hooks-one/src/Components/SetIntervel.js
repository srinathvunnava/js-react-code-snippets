import React, { useState, useEffect } from "react";

function SetIntervel() {
  const locale = 'en';
  const [today, setTime] = useState(new Date());
  const [count, setCount] = useState(7);



  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
      setTime(new Date())
    },60*1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{time}</h1>
    </div>
  );
}

export default SetIntervel;
