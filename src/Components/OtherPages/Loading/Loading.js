import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div class="d-flex justify-content-center align-items-center loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
