import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("somthing went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading..." : <div>{post.title}</div>}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
