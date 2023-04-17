import { NewDummyData } from "../../utils/NewDummyData";
import { Button, Input } from "antd";
import { useState } from "react";

const CreateNewKeyName = () => {
  const [newDummyData, setNewDummyData] = useState(NewDummyData);
  const [keyNames, setKeyNames] = useState({});

  const updateKeyName = (key, newKeyName) => {
    console.log({key})
    console.log({newKeyName})
    const updatedData = { ...newDummyData };
    updatedData[key].keyName = newKeyName;
    setNewDummyData(updatedData);
    console.log({updatedData})
  };

  const addNewKeyName = (key) => {
    if (keyNames[key]) {
      updateKeyName(key, keyNames[key]);
    }
    setKeyNames((prevKeyNames) => ({ ...prevKeyNames, [key]: "" }));
  };

  const handleKeyNameChange = (e, key) => {
    setKeyNames((prevKeyNames) => ({ ...prevKeyNames, [key]: e.target.value }));
  };

  const isKeyNameAdded = (key) => {
    return newDummyData[key].keyName !== undefined;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {Object.keys(newDummyData).map((key) => (
        <div
          key={key}
          style={{
            padding: "1rem",
            backgroundColor: "lightgray",
            height: "fit-content",
            width: "calc(25% - 20px)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "99px",
          }}
        >
          <div>
            <div style={{ fontWeight: "bold" }}>{key}</div>
            {newDummyData[key].keyName && (
              <p style={{ margin: "0.5rem 0" }}>
                keyName: {newDummyData[key].keyName}
              </p>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            {isKeyNameAdded(key) ? (
              <>
                <Input
                  style={{ marginRight: "10px", padding: "3px" }}
                  value={keyNames[key] || ""}
                  onChange={(e) => handleKeyNameChange(e, key)}
                />{" "}
                <Button onClick={() => updateKeyName(key, keyNames[key])}>
                  Edit
                </Button>
              </>
            ) : (
              <>
                <Input
                  style={{ marginRight: "10px", padding: "3px" }}
                  value={keyNames[key] || ""}
                  onChange={(e) => handleKeyNameChange(e, key)}
                />
                <Button onClick={() => addNewKeyName(key)}>Add</Button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreateNewKeyName;
