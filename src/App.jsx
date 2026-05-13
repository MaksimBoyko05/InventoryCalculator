import {useEffect, useReducer, useState} from 'react'
import {mockResources, mockRecipes} from "./constants/data.js";
import Header from "./Header.jsx";
import './App.css'
import Inventory from "./Inventory/Inventory.jsx";
import CraftStation from "./CraftStation/CraftStation.jsx";
import {inventoryReducer, initInventory, ACTIONS} from "./reducers/inventoryReducer.js";


function App() {
  const [inventory, dispatch] = useReducer(inventoryReducer, mockResources, initInventory);

  useEffect(() => {
    try {
      localStorage.setItem("inventory", JSON.stringify(inventory))
      console.log("Збережено")
    } catch (err) {
      console.log("Error with saving inventory", err)
    }
  }, [inventory]);

  const handleAddQuantity = (id) => {
    dispatch({type: ACTIONS.ADD_RESOURCE, payload: id});
  }
  const handleRemoveQuantity = (id) => {
    dispatch({type: ACTIONS.REMOVE_RESOURCE, payload: id});
  }
  const handleCraft = (recipe) =>{
    dispatch({type: ACTIONS.CRAFT_ITEM, payload: recipe})
  }
  return (
    <>
      <header>
        <Header/>
      </header>
      <main className={"main"}>
        <Inventory
          resources={inventory}
          addQuantity={handleAddQuantity}
          removeQuantity={handleRemoveQuantity}/>
        <CraftStation
          recipes={mockRecipes}
          currentResources={inventory}
          handleCraft={handleCraft}
        />
      </main>
    </>
  )
}

export default App
