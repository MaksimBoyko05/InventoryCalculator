import styles from "../inventory.module.css"
import { Trash2 } from 'lucide-react';

export default function ResourceCard({resources, addQuantity, removeQuantity, handleDeleteResource}) {
  return (
    <>
      <div className={styles.cardscontainer}>
        {resources.map(resource => (
          <div
            className={styles.itemcard}
            key={resource.id}>
            <div className={styles.itemtitle}>
              <span>{resource.icon} {resource.name}</span>
            </div>
            <p className={styles.itemquantity}>{resource.quantity}</p>
            <div className={styles.btncontainer}>
              <button
                onClick={() => removeQuantity(resource.id)}
                disabled={resource.quantity < 1}>-
              </button>
              <button onClick={() => addQuantity(resource.id)}>+</button>
            </div>
            <div className={styles.deletebtn} onClick={()=> handleDeleteResource(resource.id)}>
              <Trash2 size={16}/>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}