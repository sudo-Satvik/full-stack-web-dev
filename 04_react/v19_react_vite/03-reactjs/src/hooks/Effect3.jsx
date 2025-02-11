import { useState, useEffect } from "react";

const Effect3 = () => {
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSalary((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>My Salary Per Month</h3>
      <h1>{salary}</h1>
    </div>
  );
};

export default Effect3;
