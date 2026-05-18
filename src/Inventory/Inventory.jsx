import ResourceCard from "./components/ResourceCard.jsx";
import styles from "./inventory.module.css"
import AddResourceForm from "./components/AddResourceForm.jsx";
import {useState} from "react";

export default function Inventory({
                                    resources,
                                    addQuantity,
                                    removeQuantity,
                                    handleCreateResource,
                                    handleDeleteResource
                                  }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={styles.inventorywrapper}>
        <div className={styles.inventoryhead}><h4>Ваш інвентар:</h4>
          <button onClick={() => setIsOpen(true)}>Додати ресурс</button>
        </div>
        <ResourceCard
          resources={resources}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
          handleDeleteResource={handleDeleteResource}/>
        {isOpen && (
          <AddResourceForm handleCraftResource={handleCreateResource} onClose={setIsOpen}/>
          )}
      </div>
    </>
  )
}