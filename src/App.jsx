import {useEffect, useReducer, useState} from 'react'
import {mockResources, mockRecipes} from "./constants/data.js";
import Header from "./Header.jsx";
import './App.css'
import Inventory from "./Inventory/Inventory.jsx";
import CraftStation from "./CraftStation/CraftStation.jsx";
import {inventoryReducer, initInventory, ACTIONS} from "./reducers/inventoryReducer.js";
import {ThemeProvider} from "./context/ThemeContext.jsx";


function App() {
  const [inventory, dispatch] = useReducer(inventoryReducer, mockResources, initInventory);
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes")
    if (savedRecipes) {
      return JSON.parse(savedRecipes)
    } else {
      return mockRecipes
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem("recipes", JSON.stringify(recipes))
    } catch (err) {
      console.error("Помилка збкрігання рецептів", err)
    }
  }, [recipes]);

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
  const handleCraft = (recipe) => {
    dispatch({type: ACTIONS.CRAFT_ITEM, payload: recipe})
  }
  const handleDeleteResource = (id) => {
    dispatch({type: ACTIONS.DELETE_RESOURCE, payload: id})
  }
  const handleCreateResource = (data) => {
    const isIdExist = inventory.some(item => item.id === data.id)
    if (isIdExist) {
      alert("Такий предмет вже існує")

    } else {
      dispatch({type: ACTIONS.CREATE_RESOURCE, payload: data})
    }
  }
  const handleDeleteRecipe = (recipeId) => {
    setRecipes(recipes.filter(rec => rec.id !== recipeId))
  }
  const handleCreateRecipe = (newRecipe) =>{
    const isIdExist = recipes.some(recipe => recipe.id === newRecipe.id)
    if(isIdExist){
      alert("Такий рецепт вже існує")
    }else{
      setRecipes([...recipes, newRecipe])
    }
  }
  return (
    <>
      <ThemeProvider>
      <header>
        <Header/>
      </header>
      <main className={"main"}>
        <Inventory
          resources={inventory}
          addQuantity={handleAddQuantity}
          removeQuantity={handleRemoveQuantity}
          handleCreateResource={handleCreateResource}
          handleDeleteResource={handleDeleteResource}
        />
        <CraftStation
          recipes={recipes}
          currentResources={inventory}
          handleCraft={handleCraft}
          handleDeleteRecipe={handleDeleteRecipe}
          handleCreateRecipe={handleCreateRecipe}
        />
      </main>
      </ThemeProvider>
    </>
  )
}

export default App
