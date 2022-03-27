import React, { useEffect, useState } from "react";
import { getBlogPosts } from "./_helper";

export function TestCustomerList() {
  const [gridData, setGridData] = useState();
  useEffect(() => {
    getBlogPosts(setGridData);
  }, []);
  return (
    <div>
      <h1 className="text-center">Test customer list</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>
          {gridData?.map((data) => (
            <tr key={data?.id}>
              <th scope="col">{data?.id}</th>
              <th scope="col">{data?.title}</th>
              <th scope="col">{data?.body}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
