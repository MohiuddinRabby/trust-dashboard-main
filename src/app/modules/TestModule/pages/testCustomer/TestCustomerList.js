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
        {gridData?.map((items) => (
          <tbody key={items?.id}>
            <tr>
              <th scope="col">{items?.id}</th>
              <th scope="col">{items?.title}</th>
              <th scope="col">{items?.body}</th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
