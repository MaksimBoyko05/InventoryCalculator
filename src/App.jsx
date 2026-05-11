import { useState } from 'react'
import {mockResources, mockRecipes} from "./constants/data.js";
import Header from "./Header.jsx";
import './App.css'
import Inventory from "./Inventory/Inventory.jsx";
import CraftStation from "./CraftStation/CraftStation.jsx";

function App() {

  return (
    <>
      <header>
        <Header/>
      </header>
      <main className={"main"}>
        <Inventory resources={mockResources}/>
        <CraftStation recipes={mockRecipes} currentResources={mockResources}/>
      </main>
    </>
  )
}

export default App
