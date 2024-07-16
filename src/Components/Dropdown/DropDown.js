import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropDown(props) {
  const [languageSelected, setLanguageSelected] = useState("");
  function onDropDownClick(e) {
    const languageSelected = e;
    setLanguageSelected(languageSelected);
    props.onLanguageChange(languageSelected);
  }
  return (
    <Dropdown onSelect={onDropDownClick} className="m-2">
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Select Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="hindi" active={languageSelected === "hindi"}>
          Hindi
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="english"
          active={languageSelected === "english"}
        >
          English
        </Dropdown.Item>
        <Dropdown.Item eventKey="tamil" active={languageSelected === "tamil"}>
          Tamil
        </Dropdown.Item>
        <Dropdown.Item eventKey="all" active={languageSelected === "all"}>
          All
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
