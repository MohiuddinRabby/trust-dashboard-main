import React, { useEffect, useState } from "react";
import { getBlogPosts } from "./_helper";
export function TestCustomerCreate() {
  const [gridData, setGridData] = useState();
  useEffect(() => {
    getBlogPosts(setGridData);
  }, []);
  console.log(gridData);
  return (
    <div>
      <h1>This is test create form</h1>
    </div>
  );
}
