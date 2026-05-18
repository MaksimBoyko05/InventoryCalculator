import RecipeCard from "./components/RecipeCard.jsx";
import styles from "./craftStation.module.css"
import AddResourceForm from "../Inventory/components/AddResourceForm.jsx";
import {useState} from "react";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
export default function CraftStation({recipes, currentResources, handleCraft, handleDeleteRecipe, handleCreateRecipe }){
  const [isOpen, setIsOpen] = useState(false)
  return(
    <>
      <div className={styles.craftswrapper}>
        <div className={styles.stationhead}><h4>Ваші рецепти:</h4>
          <button onClick={()=> setIsOpen(true)}>Додати рецепт</button>
        </div>
      <RecipeCard recipes={recipes} currentResources={currentResources} handleCraft={handleCraft} handleDeleteRecipe={handleDeleteRecipe }/>
        {isOpen &&(
          <AddRecipeForm inventory={currentResources} handleCreateRecipe={handleCreateRecipe} onClose={setIsOpen}/>
        )}
      </div>
    </>
  )
}