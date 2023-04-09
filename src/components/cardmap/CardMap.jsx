import { useState } from "react";
import "./CardMap.css";
import { Link } from "react-router-dom";

const CardMap = ({ fieldOptions, folderName, subfolders }) => {
  return (
    <div className="card">
      <div className="number-circle">{subfolders?.length}</div>
      <div className="card-text">{folderName}</div>
      <div className="card-buttons">
        {/* <button className="button-primary" onClick={() =>setShowSubfolders(true)}>
          Configuration...</button> */}
        <Link
          to={`/configuration/${folderName}`}
          style={{ textDecoration: "none" }}
          className="button-primary"
        >
          Configurations
        </Link>

        <button className="button-secondary">Delete</button>
      </div>
    </div>
  );
};

export default CardMap;
