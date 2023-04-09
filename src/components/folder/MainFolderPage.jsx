import "./MainFolderPage.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import CreateNewFolderModal from "../createnewfolder/CreateNewFolderModal";
import CardMap from "../cardmap/CardMap";
import { DummyData } from "../utils/DummyData.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ConfigurationView from "../configurationsview/ConfigurationView";

const MainFolderPage = () => {
  const [openFolderModal, setOpenFolderModal] = useState(false);
  const [fieldOptions, setFieldOptions] = useState(DummyData);
  console.log({ fieldOptions });
  const emriIFolderit = Object.entries(fieldOptions).map(
    ([folderName, subfolders]) => folderName
  );
  const subfoldersArray = Object.entries(fieldOptions).map(
    ([folderName, subfolders]) => {
      const subfoldersObj = {};
      Object.keys(subfolders).forEach(subfolderName => {
        subfoldersObj[subfolderName] = {};
      });
      return subfoldersObj;
    }
  );
  
  

  const handleUpdateValue = (newData) => {
    setFieldOptions({ ...newData, ...fieldOptions });
    console.log({ newData });
  };
  return (
    <>
      <div className="folder-container">
        <div className="folder-card-container">
          <div className="folder_card_header_container">
            <p>You can create new folder here. </p>
            <button className="button" onClick={() => setOpenFolderModal(true)}>
              <AiOutlinePlus size={20} /> New Folder
            </button>

            <CreateNewFolderModal
              openFolderModal={openFolderModal}
              setOpenFolderModal={setOpenFolderModal}
              fieldOptions={fieldOptions}
              setFieldOptions={setFieldOptions}
              handleUpdateValue={handleUpdateValue}
              emriIFolderit={emriIFolderit}
              subfoldersArray={subfoldersArray}
            />
          </div>
        </div>
      </div>
      <div className="folder-container">
        <div className="folder-card-container-body">
          <div className="folder_card_header_container-body">
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  {/* {Object.entries(DummyData).map(([folderName, subfolders], index) => (
            <CardMap key={index} folderName={folderName} subfolders={Object.values(subfolders)} />
          ))} */}
                  {Object.entries(fieldOptions).map(
                    ([folderName, subfolders], index) => (
                      <CardMap
                        key={Object.values(fieldOptions).length + index}
                        folderName={folderName}
                        subfolders={Object.values(subfolders)}
                      />
                    )
                  )}
                </Route>
                <Route path="/configuration/:folderName">
                  <ConfigurationView fieldOptions={fieldOptions} />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFolderPage;
