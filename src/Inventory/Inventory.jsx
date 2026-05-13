import ResourceCard from "./components/ResourceCard.jsx";
import styles from "./inventory.module.css"
export default function Inventory({resources, addQuantity, removeQuantity}){
  return(
    <>
      <div className={styles.inventorywrapper}>
        <h4>Ваш інвентар:</h4>
        <ResourceCard resources={resources} addQuantity={addQuantity} removeQuantity={removeQuantity}/>
      </div>
    </>
  )
}