import React from "react";
import "./ConfigurationViewCard.css";

const ConfigurationViewCard = ({ folderName, subFolders}) => {
  return (
    
    <div className="card-subfolder">
        
      <div className="card-text">{folderName}</div>
      
    </div>
  );
};

export default ConfigurationViewCard;
