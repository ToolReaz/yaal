import "./assets/App.css";
import { useEffect, useState } from "react";
import MenuContainer from "./components/MenuContainer";
import MenuColumn from "./components/MenuColumn";
import MenuItem from "./components/MenuItem";

function App() {
  return (
    <div className="App">
      <h1>Yaal</h1>

      <MenuContainer>
        <MenuColumn>
          <MenuItem name="Item 1"/>
          <MenuItem name="Item 2"/>
          <MenuItem name="Item 3"/>
        </MenuColumn>
      </MenuContainer>
    </div>
  );
}

export default App;
