import CardMap from "../cardmap/CardMap";
import { DummyData } from "../utils/DummyData";
import { useParams } from "react-router-dom";
import ConfigurationViewCard from "./ConfigurationViewCard";
import "./ConfigurationViewCard.css";

const ConfigurationView = ({ fieldOptions }) => {
  const { folderName } = useParams();
  const subFolders = Object.entries(fieldOptions).find(
    ([name]) => name === folderName
  )[1];
  console.log( subFolders ? console.log("true") : console.log("false") );

  return (
    <div className="card-container">
      <div className="card-header">{folderName}</div>
      <div className="card-body">
        {Object.entries(subFolders).map(([subFolderName, subFolder]) => (
          <div className="subfolder-card">
            <div className="subfolder-text">{subFolderName}</div>
          </div>
          
        ))}
      </div>

    </div>
    // <div>
    //   <div>
    //     <h1>{folderName} Configuration</h1>
    //   </div>
    //   <ConfigurationViewCard subFolders={subFolders}/>
    //   {subFolders ? (
    //     <div className="card-subfolder">
    //       {Object.entries(subFolders).map(([subFolderName, subFolder]) => (
    //         <ConfigurationViewCard
    //           key={subFolderName}
    //           folderName={subFolderName}
    //           subfolders={Object.values(subFolder)}
    //         />
    //       ))}
    //     </div>
    //   ) : (
    //     <div>a</div>
    //   )}
    // </div>
  );
};

export default ConfigurationView;
