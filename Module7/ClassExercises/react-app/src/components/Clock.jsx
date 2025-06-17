import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let clockInterval = setInterval(() => {
      setTime(new Date());
      console.log("tick"); // <-- This logs every second
    }, 1000);
    console.log("Clock component mounted");

    return () => {
      console.log("Clock component unmounted");
      clearInterval(clockInterval);
    };
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}

export default Clock;
