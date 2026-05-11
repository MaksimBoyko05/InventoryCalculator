import RecipeCard from "./components/RecipeCard.jsx";
import styles from "./craftStation.module.css"
export default function CraftStation({recipes, currentResources}){
  return(
    <>
      <div className={styles.craftswrapper}>
      <h4>Ваші рецепти:</h4>
      <RecipeCard recipes={recipes} currentResources={currentResources}/>
      </div>
    </>
  )
}