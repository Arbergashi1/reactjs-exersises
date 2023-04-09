import { Modal, Button, Input, Select } from "antd";
import { useEffect, useState } from "react";
import "./createnewfoldermodal.css";

const CreateNewFolderModal = ({
  openFolderModal,
  setOpenFolderModal,
  setFieldOptions,
  fieldOptions,
  handleUpdateValue,
  emriIFolderit,
}) => {
  const [folderName, setFolderName] = useState("");
  const [mainFolder, setMainFolder] = useState("");
  const [subFolder, setSubFolder] = useState("");

  const [folderNameExists, setFolderNameExists] = useState(false);

  useEffect(() => {
    const isFolderNameTaken = emriIFolderit.some(
      (existingFolderName) =>
        existingFolderName.toLowerCase() === folderName.toLowerCase()
    );
    setFolderNameExists(isFolderNameTaken);
  }, [emriIFolderit, folderName]);

  const handleSubFolderChange = (value) => {
    setSubFolder(value);
  };

  const handleFolderNameChange = (e) => {
    setFolderName(e.target.value);
  };

  const subFolderOptions = fieldOptions[mainFolder];

  const handleMainFolderChange = (value) => {
    const selectedMainFolder = value;

    setMainFolder(selectedMainFolder);
    setSubFolder(subFolderOptions || "");

    console.log({ subFolderOptions });
  };

  const closeModal = () => {
    setOpenFolderModal(false);
  };

  const handleAddFolder = () => {
    if (folderName.trim()) {
      const selectedMainFolders = Array.isArray(mainFolder)
        ? mainFolder
        : mainFolder
        ? [mainFolder]
        : [];

      const newFolders = selectedMainFolders.reduce((acc, main) => {
        acc[folderName] = { ...acc[folderName], [main]: {} };
        return acc;
      }, {});

      if (selectedMainFolders.length === 0) {
        newFolders[folderName] = {};
      }

      handleUpdateValue(newFolders);
      closeModal();
      setFolderName("");
      setMainFolder("");
    }
  };

  // const handleAddFolder = () => {
  //   if (folderName.trim()) {
  //     handleUpdateValue({
  //       [folderName]: { [mainFolder]: {} },
  //     });

  //     closeModal();
  //     setFolderName("");
  //     setMainFolder([]);
  //     setSubFolder("");
  //   }
  // };

  const { Option } = Select;

  return (
    <Modal
      title="New Folder Modal"
      open={openFolderModal}
      onCancel={closeModal}
      footer={[
        <Button key="cancel" onClick={closeModal}>
          Cancel
        </Button>,
        <Button
          type="primary"
          onClick={handleAddFolder}
          disabled={folderNameExists}
        >
          Add
        </Button>,
      ]}
    >
      {folderNameExists ? <p style={{ color: "red" }}>Alredy Exists</p> : ""}

      <div className="folder-form">
        <div className="form-group">
          <label for="folder-name">Folder Name</label>
          <input
            type="text"
            id="folder-name"
            placeholder="Name Folder here..."
            value={folderName}
            onChange={handleFolderNameChange}
          />
        </div>

        <div className="form-group">
          <label>Choose Main Folder</label>
          <Select
            // mode="multiple"
            placeholder="Chose main folder..."
            allowClear
            value={mainFolder}
            onChange={handleMainFolderChange}
          >
            {emriIFolderit?.map((emri) => (
              <Option value={emri}>{emri}</Option>
            ))}
          </Select>
        </div>
        <div className="form-group">
          <label>Choose Sub Folder</label>
          <Select value={subFolder} onChange={handleSubFolderChange}>
           
          </Select>
        </div>
      </div>
    </Modal>
  );
};

export default CreateNewFolderModal;
