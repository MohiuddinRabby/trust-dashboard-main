import React, { useEffect, useState } from "react";
import { deletePost, getBlogPosts } from "./_helper";

export function TestCustomerList() {
  const [gridData, setGridData] = useState();
  useEffect(() => {
    getBlogPosts(setGridData);
  }, []);
  const showBlogDetails = (id, title, body) => {
    alert(`id: ${id}\ntitle: ${title}\ndetails: ${body}`);
  };
  const deleteBlogPost = (id) => {
    const newNotes = gridData?.filter((note) => note?.id !== id);
    deletePost(id).then(() => setGridData(newNotes));
  };
  return (
    <div>
      <h1 className="text-center">Test customer list</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        {gridData?.map((items) => (
          <tbody key={items?.id}>
            <tr>
              <th scope="col">{items?.id}</th>
              <th scope="col">{items?.title}</th>
              <th scope="col">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    showBlogDetails(items?.id, items?.title, items?.body)
                  }
                >
                  details
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBlogPost(items?.id)}
                >
                  delete
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
