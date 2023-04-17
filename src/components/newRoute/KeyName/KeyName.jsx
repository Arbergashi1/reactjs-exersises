import React from "react";
import CreateNewFolderModal from "../../createnewfolder/CreateNewFolderModal";
import CreateNewKeyName from "./CreateNewKeyName";

const KeyName = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "bisque",
          padding: "1rem",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          style={{
            padding: "0.5rem",
            alignItems: "center",
            justifyContent: "center",
            border:'none',
            width:'10%',
            borderRadius:'5px',
            backgroundColor:"green",
            cursor:'pointer'
            
          }}
        >
          Add
        </button>
      </div>
      <div>
        <CreateNewKeyName/>
      </div>
    </div>
  );
};

export default KeyName;
